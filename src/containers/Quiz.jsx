import React, { useState, useContext, useRef } from 'react';

import '../assets/styles/quiz.css';

import AppContext from '../context/AppContext';
import Question from '../components/Question';
import Result from '../components/Result';

const Quiz = () => {

  const { state, answerCorrectly, answerIncorrectly, tryAgain } = useContext(AppContext);
  const [ answered, setAnswered ] = useState(false);
  const answers = state.answers.qty;
  const [ question, setQuestion ] = useState(state.questions[answers]);
  const [ result, setResult ] = useState(false);
  const successSound = useRef(null);
  const errorSound = useRef(null);

  const onAnswerClick = (correct, button) => {
    setAnswered(true);
    if (correct) {
      answerCorrectly();
      successSound.current.currentTime = 0;
      successSound.current.play();
    } else {
      answerIncorrectly();
      button.current.classList.add('incorrect');
      errorSound.current.currentTime = 0;
      errorSound.current.play();
    }
  }

  const onNextClick = () => {
    setAnswered(false);
    if (answers >= state.questions.length) {
      setResult(true);
    }
    setQuestion(state.questions[answers < state.questions.length ? answers : 0]);
  }

  const onTryAgainClick = () => {
    setAnswered(false);
    setResult(false);
    tryAgain();
  }

  return (
    <div className="quiz">
      <h2>Sprachkurs quiz</h2>
      {result ?
        <Result answers={state.answers} onTryAgainClick={onTryAgainClick} />
        : 
        <Question 
          {...question} 
          answered={answered} 
          onAnswerClick={onAnswerClick} 
          onNextClick={onNextClick} 
        />
      }
      <audio ref={successSound} src="https://freesound.org/data/previews/171/171671_2437358-lq.mp3"></audio>
      <audio ref={errorSound} src="https://freesound.org/data/previews/572/572937_10182789-lq.mp3"></audio>
    </div>
  );
}

export default Quiz;
