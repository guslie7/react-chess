import { PieceFactory } from "../pieces/piece.factory";
export const createBoardTile = ( piece, position ) => {
  return {
    piece,
    position,
    highlighted: false
  }
}

export const createBoardPiece = ( pieceComponent, position ) => {
  return {
    pieceComponent,
    position
  }
}

export const createBoardTiles = ( playerColor ) => {
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
            rowArray.push( createBoardTile( createBoardPiece( PieceFactory('rook', truePlayerColor), position ), position ) );  
          } else if ( cellIndex === 1 || cellIndex === 6 ) {
            rowArray.push(  createBoardTile(createBoardPiece( PieceFactory('knight', truePlayerColor), position ), position) );
          } else if ( cellIndex === 2 || cellIndex === 5 ) {
            rowArray.push( createBoardTile(createBoardPiece( PieceFactory('bishop', truePlayerColor), position ), position) );
          } else if ( cellIndex === 3 ) {
            rowArray.push( createBoardTile( createBoardPiece( PieceFactory('queen', truePlayerColor), position ), position ));
          } else {
            rowArray.push( createBoardTile(createBoardPiece( PieceFactory('king', truePlayerColor), position ), position) );
          }
        } else {
          rowArray.push( createBoardTile( createBoardPiece( PieceFactory('pawn', truePlayerColor), position ), position )  );
        }
      } else {        
        rowArray.push(  createBoardTile( createBoardPiece( null, position), position )  );
      }
    }
    finalArray = finalArray.concat(rowArray);
  }
  return finalArray;
    
}