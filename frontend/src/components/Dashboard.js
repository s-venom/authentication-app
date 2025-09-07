import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Dashboard = ({ user, onLogout }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post('/api/auth/logout');
      onLogout();
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // Still logout locally even if server request fails
      onLogout();
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="dashboard">
        <h1>Dashboard</h1>
        <p>Welcome to your secure dashboard!</p>
        
        <div className="user-info">
          <h3>User Information</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.id}</p>
        </div>

        <button 
          onClick={handleLogout} 
          className="btn btn-secondary"
          disabled={loading}
        >
          {loading ? 'Signing Out...' : 'Sign Out'}
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

