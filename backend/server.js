const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// In production behind a proxy (Render), trust the proxy so secure cookies work
if (NODE_ENV === 'production') {
  app.set('trust proxy', 1);
}

// Middleware
const allowedOriginsEnv = process.env.ALLOWED_ORIGINS || process.env.FRONTEND_URL || 'https://authentication-app-lyart.vercel.app/';
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  ...allowedOriginsEnv
    .split(',')
    .map(o => o.trim())
    .filter(Boolean)
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow REST tools or same-origin/no-origin requests
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('CORS not allowed for origin: ' + origin), false);
  },
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: NODE_ENV === 'production',
    httpOnly: true,
    sameSite: NODE_ENV === 'production' ? 'none' : 'lax',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

