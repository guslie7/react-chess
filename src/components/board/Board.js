import React from 'react';
import Tile from '../Tile';

const Board = ({pieces}) => {
  const tileRow = ( rowIndex ) => {
    return [0,1,2,3,4,5,6,7].map((item) => {
      const found = pieces.find( (piece) => { 
        return piece.position.rowIndex === rowIndex && piece.position.cellIndex === item;
      });     
      
      return <Tile
        handleTileClick={function (evt) { console.log(found);
         } }
        highlighted={false}
        alternate={ ( rowIndex + item ) % 2 !== 0 }
        key={item+rowIndex}
        piece={ found ? found.pieceComponent: null }></Tile>
    });
  }

  return (
    <div className="board">{
      [0,1,2,3,4,5,6,7].map((item) => {
        return tileRow( item );
      })
    } </div>);
};

export default Board;