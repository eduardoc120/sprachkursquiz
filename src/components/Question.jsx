import React from 'react';

import '../assets/styles/question.css';

import Answer from './Answer';

const Question = (props) => {
  return (
    <div className="question">
      <h3>{props.content}</h3>
      <div className="answers">
        {props.answers.map(
          (answer, index) => (
            <Answer 
              key={answer.id}
              index={index}
              answered={props.answered}
              onClick={props.onAnswerClick}
              {...answer} 
            />
          )
        )}
      </div>
      <div className="next-button-container">
        <button onClick={props.onNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Question;
