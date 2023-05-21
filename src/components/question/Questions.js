import React, { useState } from 'react';
import './Questions.css';

const Question = ({ question, answers, handleAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleOptionChange = (answer) => {
    setSelectedAnswer(answer);
    handleAnswer(answer);
  };

  return (
    <div className="question-container">
      <h2 className="question">{question}</h2>
      <div className="answers">
        {answers.map((answer, index) => (
          <label key={index} className="answer-label">
            <input
              type="radio"
              className="answer-radio"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => handleOptionChange(answer)}
            />
            {answer}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Question;

