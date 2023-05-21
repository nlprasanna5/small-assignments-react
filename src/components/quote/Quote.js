import React, { useState } from 'react';
import './Quote.css';

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Innovation distinguishes between a leader and a follower. - Steve Jobs",
  "Stay hungry, stay foolish. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The harder I work, the luckier I get. - Samuel Goldwyn",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
];

const RandomQuoteGenerator = () => {
  const [randomQuote, setRandomQuote] = useState('');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div className='quotes'>
      <h1>Random Quote Generator</h1>
      <button onClick={generateRandomQuote}>Generate Quote</button>
      {randomQuote && <p>{randomQuote}</p>}
    </div>
  );
};

export default RandomQuoteGenerator;
