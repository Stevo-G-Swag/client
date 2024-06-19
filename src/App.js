import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import EnvironmentSetup from './components/EnvironmentSetup';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="logo.png" alt="EnviroTutor Logo" className="App-logo" />
        <h1>EnviroTutor</h1>
        <p>
          Welcome to EnviroTutor, your guide to setting up and managing development environments.
          Follow our step-by-step tutorials and receive real-time AI assistance to enhance your learning experience.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about React
        </a>
      </header>
      <main>
        <section className="App-section">
          <Login />
        </section>
        <section className="App-section">
          <Register />
        </section>
        <section className="App-section">
          <EnvironmentSetup />
        </section>
      </main>
    </div>
  );
}

export default App;
