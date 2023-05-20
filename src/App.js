import React from 'react';
import Button from './components/button/Button';
import './App.css';

const App = () => {
  const handleClick1 = () => {
    alert('I am button 1 clicked');
  };

  const handleClick2 = () => {
    alert('I am button 2 clicked');
  };

  const buttonStyle1 = {
    color: 'white',
    background: 'red',
    border:'transparent',
    padding:'1rem',
    borderRadius:'10px',
    fontWeight:'bold',
  };

  const buttonStyle2 = {
    color: 'white',
    background: 'blue',
    border:'transparent',
    padding:'1rem',
    borderRadius:'10px',
    fontWeight:'bold',
  };

  return (
    <div className='container'>
      <Button
        buttonText="Button 1"
        buttonStyle={buttonStyle1}
        onClick={handleClick1}
      />

      <Button
        buttonText="Button 2"
        buttonStyle={buttonStyle2}
        onClick={handleClick2}
      />
    </div>
  );
};

export default App;
