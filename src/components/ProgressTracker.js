import React from 'react';
import { useSelector } from 'react-redux';

function ProgressTracker() {
  const stepsCompleted = useSelector((state) => state.progress.stepsCompleted);
  const badges = useSelector((state) => state.progress.badges);

  return (
    <div>
      <h2>Progress Tracker</h2>
      <p>Steps Completed: {stepsCompleted}</p>
      <div>
        <h3>Badges Earned:</h3>
        {badges.map((badge, index) => (
          <div key={index}>{badge}</div>
        ))}
      </div>
    </div>
  );
}

export default ProgressTracker;