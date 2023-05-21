import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrementByTen = () => {
    setCounter(counter + 10);
  };

  const handleDecrementByTen = () => {
    setCounter(counter - 10);
  };

  return (
    <div className="container">
      <h1>Counter: {counter}</h1>
      <div className="buttons-container">
        <div className='up'>
        <button className="button-up" onClick={handleIncrement}>Up</button>
        </div>
        <div className='right-left'>
        <button className="button-left" onClick={handleDecrementByTen}>Left</button>
        <button className="button-right" onClick={handleIncrementByTen}>Right</button>
        </div>
        <div className='down'>
        <button className="button-down" onClick={handleDecrement}>Down</button>
        </div>
      </div>
    </div>
  );
};

export default App;
