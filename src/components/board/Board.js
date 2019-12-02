import React from 'react';
import Tile from '../Tile';
import { useState } from 'react';
import {
  handlePieceHighlight,
  handlePieceMovement,
  handlePieceAttack
} from '../../services/movements/movement';

const Board = ({tiles}) => {
  const [tilesSt, updateTilesFn] = useState(tiles);
  const [ highlightMode, updateHighlightModeFn ] = useState(false);
  const [ lastPieceTouched, updateLastPieceTouchedFn ] = useState(null);
  
  const tileRow = ( rowIndex ) => {
    return [0,1,2,3,4,5,6,7].map((item) => {
      const tileFound = tilesSt.find( (tile) => { 
        return tile.position.rowIndex === rowIndex && tile.position.cellIndex === item;
      });
      
      return <Tile
        handleTileClick={
          function (evt) {
            
            if (tileFound.piece.pieceComponent && !highlightMode ) {
              handlePieceHighlight(tileFound.piece, tilesSt);
              updateLastPieceTouchedFn( tileFound.piece );
              tileFound.highlighted = !tileFound.highlighted;
              updateTilesFn( tilesSt.slice() );
              updateHighlightModeFn(true);
            } else if ( tileFound.piece.pieceComponent && highlightMode ) {
              handlePieceAttack( lastPieceTouched, tilesSt, tileFound );
              tilesSt.forEach( (tile) => {
                tile.highlighted = false;
              });
              updateTilesFn( tilesSt.slice() );
              updateLastPieceTouchedFn( null );
              updateHighlightModeFn(false);
            }

            if (!tileFound.piece.pieceComponent && highlightMode) {
              handlePieceMovement( lastPieceTouched, tilesSt, tileFound );
              tilesSt.forEach( (tile) => {
                tile.highlighted = false;
              });
              updateTilesFn( tilesSt.slice() );
              updateLastPieceTouchedFn( null );
              updateHighlightModeFn(false);
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