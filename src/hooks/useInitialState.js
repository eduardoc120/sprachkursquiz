import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {

  const [ state, setState ] = useState(initialState);

  const answerCorrectly = () => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        qty: prev.answers.qty + 1,
        correct: prev.answers.correct + 1,
      }
    }));
  };

  const answerIncorrectly = () => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        qty: prev.answers.qty + 1,
        wrong: prev.answers.wrong + 1,
      }
    }));
  }

  const tryAgain = () => {
    setState(prev => ({
      ...prev,
      answers: {
        qty: 0,
        correct: 0,
        wrong: 0
      }
    }));
  }

  return {
    state,
    answerCorrectly,
    answerIncorrectly,
    tryAgain
  };

}

export default useInitialState;
