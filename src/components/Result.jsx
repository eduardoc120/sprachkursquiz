import React from 'react';

import '../assets/styles/result.css';

import winnersIlustration from '../assets/images/undraw_winners_ao2o 2.svg';

const Result = (props) => {
  return (
    <div className="result">
      <img src={winnersIlustration} alt="winners" />
      <div>
        <h1>Results</h1>
        <p>You got <span>{props.answers.correct}</span> correct answers</p>
        <p>Total Answers: <strong>{props.answers.qty}</strong></p>
      </div>
      <button onClick={props.onTryAgainClick}>Try again</button>
    </div>
  );
};

export default Result;
