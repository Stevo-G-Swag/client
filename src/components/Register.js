import React, { useState } from 'react';
import axios from './axiosConfig'

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    console.log('Attempting registration with username:', username, 'and password:', password); // Added log for username and password
    try {
      const response = await axios.post("/api/register", { username, password });
      console.log('Registration request sent:', response);
      if (response.status === 201) {
        alert('Registration Successful');
      } else {
        throw new Error('Registration failed with status: ' + response.status);
      }
    } catch (err) {
      console.error('Registration error:', err.response ? err.response.data.error : err.message);
      setError(err.response ? err.response.data.error : 'An unknown error occurred');
    }
  };

  return (
    <div className="App-section">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
