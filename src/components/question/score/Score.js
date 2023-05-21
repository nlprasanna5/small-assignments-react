const ScoreDisplay = ({ score, totalQuestions }) => {
    return (
      <div>
        <h2>Quiz completed!</h2>
        <p>Your final score is: {score}/{totalQuestions}</p>
      </div>
    );
  };
  
  export default ScoreDisplay;