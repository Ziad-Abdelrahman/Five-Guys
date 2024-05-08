import { useState } from 'react';
import './changePass.css';

const ChangePasswordForm = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChangePassword = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (newPassword.trim() === '' || confirmPassword.trim() === '') {
      setError('Please fill in both password fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    // Simulate password change success (replace with your actual logic)
    console.log('Changing password to:', newPassword);

    // Reset form fields
    setNewPassword('');
    setConfirmPassword('');
    setError('');

    // Show success alert
    alert('Password changed successfully!');
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form onSubmit={handleChangePassword} className="formContainer">
      <h2>Change Password</h2>
      <div className="passwordInput">
        <label>New Password:</label>
        <input
          type={showNewPassword ? 'text' : 'password'}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="button" onClick={toggleNewPasswordVisibility}>
          {showNewPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <div className="passwordInput">
        <label>Confirm New Password:</label>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="button" onClick={toggleConfirmPasswordVisibility}>
          {showConfirmPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      {error && <p className="errorMessage">{error}</p>}
      <div className="buttonContainer">
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
