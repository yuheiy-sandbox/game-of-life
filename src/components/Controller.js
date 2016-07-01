'use strict';
import React from 'react';

export default function Controller({
  isRunning, onClickNext, onClickStart, onClickStop
}) {
  return (
    <p>
      <button onClick={onClickNext}>next</button>
      {' '}
      {isRunning ? (
        <button onClick={onClickStop}>stop</button>
      ) : (
        <button onClick={onClickStart}>start</button>
      )}
    </p>
  );
}
