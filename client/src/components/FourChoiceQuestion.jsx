import React from 'react';

const FourChoiceQuestion = ({choices, handleSubmit}) => {
    return (
      <div className="general-container">
        <div className="general-container__choices">
          {
            choices.map((choice, i) => {
              return(
                <div key={i} className={`general-container__genreEach ${choice}`}>
                  <div onClick={handleSubmit.bind(null, choice)}>{choice}</div>
                </div>
              )
          })}  
        </div>
      </div>
    )
  }
  
export default FourChoiceQuestion;
