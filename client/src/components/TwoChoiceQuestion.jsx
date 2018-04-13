import React from 'react';

const TwoChoiceQuestion = ({choices, handleSubmit}) => {
    return (
      <div className="general-container">
        <div className ="general-container__choices">
          {
            choices.map((choice,i) => {
              let reform = choice.replace(/\s/g, '');
              console.log(reform)
              return(
                <div key={i} className={`general-container__choiceEach ${reform}`}>
                  <div className="general-container__word" onClick={handleSubmit.bind(null, choice)}>{choice}</div>
                </div>
              )
             
          })}      
        </div>
      </div>  

    )
  }
  
export default TwoChoiceQuestion;
