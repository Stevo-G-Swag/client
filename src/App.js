import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import EnvironmentSetup from './components/EnvironmentSetup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="Subject.png" alt="EnviroTutor Logo" className="App-logo" />
          <h1>EnviroTutor</h1>
          <p>
            Welcome to EnviroTutor, your guide to setting up and managing development environments.
            Follow our step-by-step tutorials and receive real-time AI assistance to enhance your learning experience.
          </p>
          <nav className="App-nav">
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/environment-setup">Environment Setup</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/environment-setup" component={EnvironmentSetup} />
            <Route path="/" exact component={Home} />
          </Switch>
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
