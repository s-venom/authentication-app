# 🔐 Authentication App - React.js & Node.js

A complete authentication system built with React.js frontend and Node.js backend, featuring user registration, login, session management, and logout functionality.

## ✨ Features

- **User Registration**: Create new accounts with email and password
- **Secure Login**: Authenticate users with hashed passwords
- **Session Management**: Stay logged in using cookies and sessions
- **Protected Routes**: Dashboard accessible only to authenticated users
- **Password Security**: Passwords are hashed using bcrypt
- **Input Validation**: Client and server-side validation
- **Responsive Design**: Modern, mobile-friendly UI
- **SQLite Database**: Lightweight, file-based database

## 🛠 Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **SQLite3** - Database
- **bcrypt** - Password hashing
- **express-session** - Session management
- **CORS** - Cross-origin resource sharing

### Frontend
- **React.js** - UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **CSS3** - Styling with modern gradients

## 📁 Project Structure

```
authentication-app/
├── backend/
│   ├── server.js          # Main server file
│   ├── db.js             # Database configuration
│   ├── routes/
│   │   └── auth.js       # Authentication routes
│   └── package.json      # Backend dependencies
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js      # Login component
│   │   │   ├── Register.js   # Registration component
│   │   │   └── Dashboard.js  # Protected dashboard
│   │   ├── App.js        # Main app component
│   │   ├── index.js      # Entry point
│   │   └── index.css     # Global styles
│   └── package.json      # Frontend dependencies
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd authentication-app
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Start the Backend Server**
   ```bash
   cd ../backend
   npm start
   ```
   The backend will run on `http://localhost:5000`

5. **Start the Frontend Development Server**
   ```bash
   cd ../frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

## 🔧 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/register` | Register new user | `{ email, password }` |
| POST | `/login` | Login user | `{ email, password }` |
| POST | `/logout` | Logout user | - |
| GET | `/me` | Check auth status | - |

### Example API Usage

```javascript
// Register
const response = await fetch('/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ email: 'user@example.com', password: 'password123' })
});

// Login
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',
  body: JSON.stringify({ email: 'user@example.com', password: 'password123' })
});
```

## 🗄️ Database Schema

The SQLite database automatically creates a `users` table with the following structure:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds
- **Session Security**: HTTP-only cookies prevent XSS attacks
- **Input Validation**: Both client and server-side validation
- **CORS Protection**: Configured for specific origins
- **SQL Injection Prevention**: Parameterized queries

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface with gradients
- **Responsive Layout**: Works on desktop and mobile devices
- **Loading States**: Visual feedback during API calls
- **Error Handling**: User-friendly error messages
- **Form Validation**: Real-time input validation
- **Auto-login**: Automatic login after successful registration

## 🧪 Testing the Application

1. **Register a new account**
   - Go to `http://localhost:3000/register`
   - Enter email and password
   - Click "Create Account"

2. **Login with existing credentials**
   - Go to `http://localhost:3000/login`
   - Enter your credentials
   - Click "Sign In"

3. **Access protected dashboard**
   - After login, you'll be redirected to `/dashboard`
   - View your user information
   - Test the logout functionality

4. **Test session persistence**
   - Login and refresh the page
   - You should remain logged in
   - Close and reopen the browser to test session storage

## 🚀 Deployment

### Backend Deployment (Render/Heroku)

1. **Prepare for production**
   ```bash
   # Update server.js
   const PORT = process.env.PORT || 5000;
   
   # Update CORS origin
   origin: process.env.FRONTEND_URL || 'http://localhost:3000'
   ```

2. **Deploy to Render**
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables

### Frontend Deployment (Vercel/Netlify)

1. **Update API URLs**
   ```javascript
   // In frontend/src/App.js
   const API_BASE_URL = process.env.REACT_APP_API_URL || '';
   ```

2. **Deploy to Vercel**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `build`
   - Add environment variables

## 🔧 Environment Variables

### Backend (.env)
```
PORT=5000
SESSION_SECRET=your-super-secret-key
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com
```

## 📝 Development Scripts

### Backend
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

1. **CORS Errors**
   - Ensure backend CORS is configured for your frontend URL
   - Check that credentials are included in requests

2. **Session Not Persisting**
   - Verify cookie settings in server configuration
   - Check browser cookie settings

3. **Database Errors**
   - Ensure SQLite database file is created
   - Check file permissions

4. **Port Conflicts**
   - Backend runs on port 5000, frontend on 3000
   - Update ports in configuration if needed

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the console for error messages
3. Ensure all dependencies are installed correctly
4. Verify that both servers are running

---

**Happy Coding! 🚀**

