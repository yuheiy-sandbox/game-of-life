'use strict';
import React from 'react';
import classNames from 'classnames';

export default function Field({matrix, onClick}) {
  return (
    <div>
      {matrix.map((row, y) => (
        <div
          key={y}
          className="row">
          {row.map((cell, x) => (
            <div
              key={x}
              className={classNames('cell', {'is-active': cell})}
              onClick={() => onClick(x, y)} />
          ))}
        </div>
      ))}
    </div>
  );
}
