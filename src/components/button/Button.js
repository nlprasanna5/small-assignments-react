import React from 'react';

const Button = ({ buttonText, buttonStyle, onClick }) => {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
