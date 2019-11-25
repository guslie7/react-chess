import React from 'react';
import './App.css';
import Board from './components/board/Board';
import { createBoardTiles } from './components/board/board.service';

const pieces = createBoardTiles('w');

function App() {
  return (
    <div className="App">
      <Board tiles={pieces} ></Board>
    </div>
  );
}

export default App;