import React, { useState } from 'react';
import axios from './axiosConfig';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    console.log('Attempting login with username:', username, 'and password:', password); // Added log for username and password
    try {
      const response = await axios.post("/api/login", { username, password });
      console.log('Login request sent:', response);
      alert('Login Successful');
    } catch (err) {
      console.error('Login error:', err.response ? err.response.data.error : err.message);
      setError(err.response ? err.response.data.error : 'An unknown error occurred');
    }
  };

  return (
    <div className="App-section">
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
