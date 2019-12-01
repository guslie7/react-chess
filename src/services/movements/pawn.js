import {
  calculateTargetTilePosition,
  createEmptyBoardPiece,
  findTileByPosition
} from './core';

export function handlePawnHighlight(piece, tiles) {
  const targetTilePosition = calculateTargetTilePosition( piece, 1, 0 );  
  const targetTile = findTileByPosition(tiles,
    targetTilePosition.rowIndex,
    targetTilePosition.cellIndex
  );
  targetTile.highlighted = true;
  
  if (piece.position.rowIndex === 6 || piece.position.rowIndex === 1 ) {
    const secondTargetTilePosition = calculateTargetTilePosition( piece, 2, 0 );
    const secondTile = findTileByPosition(
      tiles,
      secondTargetTilePosition.rowIndex,
      secondTargetTilePosition.cellIndex
    );
    secondTile.highlighted = true;
  }
  return [piece, tiles];
}

export function handlePawnMovement(piece, tiles, tileTarget) {
  const targetTilePosition = calculateTargetTilePosition( piece, 1, 0 );
  const firstValidtargetTile = findTileByPosition(tiles,
    targetTilePosition.rowIndex,
    targetTilePosition.cellIndex
  );
  if (firstValidtargetTile === tileTarget) {
    //all clear, move the piece up
    const originalTile = findTileByPosition( tiles, piece.position.rowIndex, piece.position.cellIndex);
    originalTile.piece = createEmptyBoardPiece( {...originalTile.position} );
    piece.position = {...tileTarget.position};
    tileTarget.piece = piece;
    return [piece, tiles];
  }

  if (piece.position.rowIndex === 6 || piece.position.rowIndex === 1 ) {
    const secondTargetTilePosition = calculateTargetTilePosition( piece, 2, 0 );
    const secondValidtargetTile = findTileByPosition(tiles,
      secondTargetTilePosition.rowIndex,
      secondTargetTilePosition.cellIndex
    );
    if (secondValidtargetTile === tileTarget) {
      //all clear, move the piece up
      const originalTile = findTileByPosition( tiles, piece.position.rowIndex, piece.position.cellIndex);
      originalTile.piece = createEmptyBoardPiece( {...originalTile.position} );
      piece.position = {...tileTarget.position};
      tileTarget.piece = piece;
      return [piece, tiles];
    } 
  }
}