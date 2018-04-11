import React from 'react';

const TwoChoiceQuestion = ({choices, handleSubmit}) => {
    return (
      <div>
        {
          choices.map(choice => (
          <button onClick={handleSubmit.bind(null, choice)}>{choice}</button>
        ))}        
      </div>
    )
  }
  
export default TwoChoiceQuestion;
