import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = ({ hoursRemaining, minutesRemaining }) => {
  const [timeRemaining, setTimeRemaining] = useState(
    hoursRemaining * 60 * 60 + minutesRemaining * 60
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="countdown-timer">
      <span>{hours < 10 ? `0${hours}` : hours}</span>:
      <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
      <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
    </div>
  );
};

export default CountdownTimer;
