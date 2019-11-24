import React from 'react';
import './App.css';
import King from './components/pieces/King';
import Knight from './components/pieces/Knight';
import Pawn from './components/pieces/Pawn';
import Queen from './components/pieces/Queen';
import Rook from './components/pieces/Rook';
import Bishop from './components/pieces/Bishop';

function App() {
  return (
    <div className="App">
      <King></King>
      <Knight></Knight>
      <Pawn></Pawn>
      <Queen></Queen>
      <Rook></Rook>
      <Bishop></Bishop>
    </div>
  ); 
}

export default App;

