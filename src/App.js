import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import EnvironmentSetup from './components/EnvironmentSetup';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>EnviroTutor</h1>
      <Login />
      <Register />
      <EnvironmentSetup />
    </div>
  );
}

export default App;