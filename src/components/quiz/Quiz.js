import React, { useState } from 'react';
import Question from '../question/Questions';
import ScoreDisplay from '../question/score/Score';
import './Quiz.css'

const QuestionsData = [
    {
        Question: 'What is html?',
        Answers: ['hypertext markup language', 'hyper text', 'text'],
        correctOption: 'hyperText markup language',
    },
    {
        Question: 'What is css?',
        Answers: ['cascading', 'sheets', 'cascading style sheets'],
        correctOption: 'cascading style sheets',
    },
    {
        Question: 'How many sizes of headers are available in HTML by default?',
        Answers: ['7', '6', '5'],
        correctOption: '6',
    },
    {
        Question: 'What is the smallest header in HTML by default?',
        Answers: ['h5', 'h2 ', 'h6'],
        correctOption: 'h6',
    },
    {
        Question: 'How to create an ordered list in HTML?',
        Answers: ['<ul', '<ol>', '<b>'],
        correctOption: '<ol>',
    },
];

const QuizApp = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleAnswer = (selectedAnswer) => {
        setUserAnswers([...userAnswers, selectedAnswer]);
        // Check if the selected answer is correct
        if (
            selectedAnswer.toLowerCase() ===
            QuestionsData[currentQuestion].correctOption.toLowerCase()
        ) {
            setScore(score + 1);
        }

        // Move to the next question
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < QuestionsData.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setSubmitted(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < QuestionsData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <div className='quiz'>

        <div>
            <h2 className='text'>Quiz</h2>
            {submitted ? (
                <ScoreDisplay score={score} totalQuestions={QuestionsData.length} />
            ) : (
                <Question
                    question={QuestionsData[currentQuestion].Question}
                    answers={QuestionsData[currentQuestion].Answers}
                    handleAnswer={handleAnswer}
                />
            )}
            {!submitted && (
                <div className='btns'>
                    <button onClick={handlePrevious} disabled={currentQuestion === 0}>
                        Previous
                    </button>
                    {currentQuestion < QuestionsData.length - 1 ? (
                        <button onClick={handleNext}>Next</button>
                    ) : (
                        <button onClick={handleSubmit}>Submit</button>
                    )}
                </div>
            )}
        </div>
        </div>
    );
};

export default QuizApp;
