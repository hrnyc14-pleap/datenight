import React from 'react';

const TwoChoiceQuestion = ({choices, handleSubmit}) => {
    return (
      <div>
        {
          choices.map((choice, i) => (
          <button key={i} onClick={handleSubmit.bind(null, choice)}>{choice}</button>
        ))}        
      </div>
    )
  }
  
export default TwoChoiceQuestion;
