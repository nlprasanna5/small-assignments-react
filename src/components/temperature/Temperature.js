import React, { useState } from 'react';
import './Temperature.css';

const TemperatureControlApp = () => {
  const [temperature, setTemperature] = useState(20);

  const handleIncrement = () => {
    setTemperature(prevTemperature => prevTemperature + 1);
  };

  const handleDecrement = () => {
    setTemperature(prevTemperature => prevTemperature - 1);
  };

  let backgroundColor = 'yellow';
  if (temperature > 30 && temperature <= 50) {
    backgroundColor = 'orange';
  } else if (temperature > 50) {
    backgroundColor = 'red';
  }

  return (
    <div style={{ backgroundColor, padding: '20px' }} className='temp'>
      <h2>Temperature Control App</h2>
      <p>Temperature: {temperature}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default TemperatureControlApp;
