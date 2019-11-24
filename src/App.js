import React from 'react';
import './App.css';
import Board from './components/board/Board';
import { createBoardPieces } from './components/board/board.service';
import { useState } from 'react';

const pieces = createBoardPieces('w');

function App() {
  const [piecesSt, updatePiecesSt] = useState(pieces);
  return (
    <div className="App">
      <Board pieces={piecesSt} ></Board>
      <button onClick={
        () => {
          const novos = piecesSt.slice();
          novos[0].position = { rowIndex: 0, cellIndex: 1 } ;
          updatePiecesSt(novos);
        }
      }>update</button>
    </div>
  );
}

export default App;