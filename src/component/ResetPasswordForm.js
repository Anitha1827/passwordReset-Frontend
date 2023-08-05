import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPasswordPage = () => {
  const { randomString } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    if (newPassword === confirmPassword) {
      try {
        const response = await fetch(`https://passwordrest.onrender.com/auth/resetpassword/${randomString}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newPassword }),
        });

        if (response.status === 200) {
          setMessage("Password reset successful")
        } else {
          setMessage("Password reset failed")
        }
      } catch (error) {
        console.error('Error resetting password:', error);
      }
    } else {
      // Show password mismatch error
      
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
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
