import React from 'react';
import './App.css';
import King from './components/pieces/King';
import Knight from './components/pieces/Knight';
import Pawn from './components/pieces/Pawn';
import Queen from './components/pieces/Queen';
import Rook from './components/pieces/Rook';
import Bishop from './components/pieces/Bishop';
import Tile from './components/Tile';

function App() {
  return (
    <div className="App">
      <Tile alternate={true} piece={ <King></King> } />
      <Tile piece={ <Knight></Knight> } />
      <Tile alternate={true} piece={ <Pawn></Pawn> } />
      <Tile piece={ <Queen></Queen> } />
      <Tile alternate={true} piece={ <Rook></Rook> } />
      <Tile piece={ <Bishop></Bishop> } />
    </div>
  ); 
}

export default App;

