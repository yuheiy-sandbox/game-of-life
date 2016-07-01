'use strict';
import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import GameOfLife from './game-of-life';

const gameOfLife = new GameOfLife(20, 20);

function renderApp() {
  render(<App gameOfLife={gameOfLife} />, document.getElementById('app'));
}

renderApp();
gameOfLife.subscribe(renderApp);
