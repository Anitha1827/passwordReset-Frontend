import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [token, setToken ] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tokenParam = urlParams.get('token');
    setToken(tokenParam)
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // // Extract the reset token from the URL
      // const searchParams = new URLSearchParams(window.location.search);
      // const token = searchParams.get('token');

      // Make an API call to the backend to verify the reset token
      
      await axios.post('http://localhost:5000/auth/reset-password', { token, newPassword: password });
      setMessage('Password reset successful.');
    } catch (error) {
      setMessage('Error resetting password. Please try again later.');
    }
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title mb-4">Reset Password</h3>
            {message && <div className="alert alert-info">{message}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ResetPasswordPage;
