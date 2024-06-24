import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementStep, addBadge } from '../features/progress/progressSlice';

function EnvironmentSetup() {
  const dispatch = useDispatch();

  const completeStep = () => {
    dispatch(incrementStep());
    dispatch(addBadge('Environment Setup Completed'));
  };

  return (
    <div className="App-section">
      <h2>Environment Setup</h2>
      <p>Here users will be able to configure their development environments.</p>
      <button onClick={completeStep}>Complete Setup</button>
    </div>
  );
}

export default EnvironmentSetup;