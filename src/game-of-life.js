'use strict';

export default class GameOfLife {
  constructor(width, height) {
    this._width = width;
    this._height = height;
    this._matrix = this._createMatrix();
    this._subscribers = [];
  }

  get matrix() {
    return this._matrix;
  }

  subscribe(callback) {
    this._subscribers.push(callback);
  }

  _createMatrix(width = this._width, height = this._height) {
    return Array(height).fill().map(() => Array(width).fill(false));
  }

  _isActive(x, y) {
    if (x < 0 || x >= this._width) {
      return false;
    }
    if (y < 0 || y >= this._height) {
      return false;
    }
    return this._matrix[y][x];
  }

  _countActive(x, y) {
    let count = 0;
    for (let _x = -1; _x < 2; _x++) {
      for (let _y = -1; _y < 2; _y++) {
        if (_x === 0 && _y === 0) {
          continue;
        }
        if (this._isActive(x + _x, y + _y)) {
          count++;
        }
      }
    }
    return count;
  }

  next() {
    const nextMatrix = this._createMatrix();
    this._matrix.forEach((row, y) => {
      row.forEach((cell, x) => {
        const count = this._countActive(x, y);
        let nextActive = false;
        if (this._isActive(x, y)) {
          if (count === 2 || count === 3) {
            nextActive = true;
          }
        } else {
          if (count === 3) {
            nextActive = true;
          }
        }
        nextMatrix[y][x] = nextActive;
      });
    });
    this._matrix = nextMatrix;
    this._subscribers.forEach((callback) => callback());
  }

  toggleCell(x, y) {
    this._matrix[y][x] = !this._matrix[y][x];
    this._subscribers.forEach((callback) => callback());
  }
}
