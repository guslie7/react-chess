import React from 'react';
import Tile from '../Tile';
import { useState } from 'react';

const Board = ({tiles}) => {
  const [tilesSt, updateTilesFn] = useState(tiles);
  
  const tileRow = ( rowIndex ) => {
    return [0,1,2,3,4,5,6,7].map((item) => {
      const tileFound = tilesSt.find( (tile) => { 
        return tile.position.rowIndex === rowIndex && tile.position.cellIndex === item;
      });
      
      return <Tile
        handleTileClick={
          function (evt) {            
            if (tileFound.piece.pieceComponent) {
              tileFound.highlighted = !tileFound.highlighted;
              updateTilesFn( tilesSt.slice() );
            }
          }
        }
        hasPiece={ !!tileFound.piece.pieceComponent }
        highlighted={tileFound.highlighted}
        alternate={ ( rowIndex + item ) % 2 !== 0 }
        key={item+rowIndex}
        piece={ tileFound.piece ? tileFound.piece.pieceComponent: null }></Tile>
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