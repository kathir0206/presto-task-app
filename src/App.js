import React, { useState } from 'react';
import Question from './Question';
import NextButton from './NextButton';
import SubmitButton from './SubmitButton';
import "./App.css"


const quizData = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'Who is the author of "To Kill a Mockingbird"?',
    options: ['Harper Lee', 'Jane Austen', 'F. Scott Fitzgerald', 'George Orwell'],
    correctAnswer: 'Harper Lee',
  },
  // Add more questions here
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  
  const handleOptionSelect = (option) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestionIndex] = option;
    setSelectedOptions(updatedOptions);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleSubmitQuiz = () => {
    // Calculate the score
    const score = quizData.reduce((acc, question, index) => {
      if (selectedOptions[index] === question.correctAnswer) {
        return acc + 1;
      }
      return acc;
    }, 0);

    alert(`Thank you for taking the quiz! Your score is ${score}/${quizData.length}`);
  };
  
  const currentQuestion = quizData[currentQuestionIndex];

  return (
    <div className="content-container">
      <Question
        question={currentQuestion.question}
        options={currentQuestion.options}
        selectedOption={selectedOptions[currentQuestionIndex] || ''}
        onOptionSelect={handleOptionSelect}
      />
      {currentQuestionIndex < quizData.length - 1 ? (
        <NextButton onClick={handleNextQuestion} />
      ) : (
        <SubmitButton onSubmit={handleSubmitQuiz} />
      )}
    </div>
  );
}

export default App;
