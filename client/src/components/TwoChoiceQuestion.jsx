import React from 'react';

const TwoChoiceQuestion = ({choices, handleSubmit}) => {
    return (
      <div className="general-background">
        <div className="general-container">
          {
            choices.map(choice => (
            <button onClick={handleSubmit.bind(null, choice)}>{choice}</button>
          ))}      
        </div>  
      </div>
    )
  }
  
export default TwoChoiceQuestion;
