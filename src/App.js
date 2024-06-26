import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import EnvironmentSetup from './components/EnvironmentSetup';
import ProgressTracker from './components/ProgressTracker';
import './App.css';

function App() {
  const [isLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src="Subject.png" alt="EnviroTutor Logo" className="App-logo" />
            <h1>EnviroTutor</h1>
          </Link>
          <p>
            Welcome to EnviroTutor, your guide to setting up and managing development environments.
            Follow our step-by-step tutorials and receive real-time AI assistance to enhance your learning experience.
          </p>
          <nav className="App-nav">
            <ul>
              {!isLoggedIn ? (
                <>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/register">Register</Link></li>
                </>
              ) : null}
              <li><Link to="/">Home</Link></li>
              <li><Link to="/environment-setup">Environment Setup</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/environment-setup" element={<EnvironmentSetup />} />
          </Routes>
          <ProgressTracker />
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Welcome to EnviroTutor</h2>
      <p>Navigate through the sections to get started with our tutorials and setup guides.</p>
    </div>
  );
}

export default App;
