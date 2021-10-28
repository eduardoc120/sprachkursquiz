import React, { useEffect, useRef } from 'react';

import '../assets/styles/answer.css';

const Answer = (props) => {

  const letters = ['A', 'B', 'C'];
  const letter = letters[props.index];
  const button = useRef(null);

  useEffect(() => {
    if (props.answered) {
      button.current.classList.add('replied');
      if (props.correct) {
        button.current.classList.add('correct');
      }
    }
  }, [props.answered, props.correct]);

  return (
    <button className="answer" ref={button} onClick={() => props.onClick(props.correct, button)}>
      <div>
        <span className="letter">{letter}</span>
        <span className="content">{props.content}</span>
      </div>
      <span className="material-icons">
        {props.correct ? 'check_circle_outline' : 'highlight_off'}
      </span>
    </button>
  );
};

export default Answer;
