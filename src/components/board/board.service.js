
import { PieceFactory } from "../pieces/piece.factory";

export const createBoardPiece = ( pieceComponent, position ) => {
  return {
    pieceComponent,
    position
  }
}

export const createBoardPieces = ( playerColor ) => {
  let finalArray = [];
  let truePlayerColor = playerColor;
  
  for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
    const rowArray = [];
    if (rowIndex === 0 || rowIndex === 1) {
      truePlayerColor = 'b';
    } else {
      truePlayerColor = 'w';
    }
    for (let cellIndex = 0; cellIndex < 8; cellIndex++) {

      const position =  { rowIndex, cellIndex };

      if (rowIndex === 0 ||
        rowIndex === 1 ||
        rowIndex === 6 ||
        rowIndex === 7) {

        if ( rowIndex === 0 || rowIndex === 7 ) {
          if ( cellIndex === 0 || cellIndex === 7 ) {
            rowArray.push( createBoardPiece( PieceFactory('rook', truePlayerColor), position ) );  
          } else if ( cellIndex === 1 || cellIndex === 6 ) {
            rowArray.push( createBoardPiece( PieceFactory('knight', truePlayerColor), position ) );
          } else if ( cellIndex === 2 || cellIndex === 5 ) {
            rowArray.push( createBoardPiece( PieceFactory('bishop', truePlayerColor), position ) );
          } else if ( cellIndex === 3 ) {
            rowArray.push( createBoardPiece( PieceFactory('queen', truePlayerColor), position ) );
          } else {
            rowArray.push( createBoardPiece( PieceFactory('king', truePlayerColor), position ) );
          }
        } else {
          rowArray.push( createBoardPiece( PieceFactory('pawn', truePlayerColor), position ) );
        }
      } else {        
        rowArray.push( createBoardPiece( null, position) );
      }
    }
    finalArray = finalArray.concat(rowArray);
  }
  return finalArray;
    
}