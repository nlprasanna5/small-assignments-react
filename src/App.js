import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <h2>Counter</h2>
      <div className="timer">{count}</div>;
    </div>
  )

}

export default App;
