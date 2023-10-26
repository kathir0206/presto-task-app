import React from 'react';


function Question({ question, options, selectedOption, onOptionSelect }) {
  return (
    <div className="question-container">
    <h1>The Quiz App </h1>
      <h2 className="question-title">{question}</h2>
      {options.map((option, index) => (
        <label key={index}  className="answer-label">
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={() => onOptionSelect(option)}
            className="answer-input"
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default Question;
