import React from 'react';

const TwoChoiceQuestion = ({choices, handleSubmit}) => {
    return (
      <div className="general-background">
        <div className="general-container">
          {
            choices.map((choice,i) => (
            <button key={i} onClick={handleSubmit.bind(null, choice)}>{choice}</button>
          ))}      
        </div>  
      </div>
    )
  }
  
export default TwoChoiceQuestion;
