import {
  calculateTargetTilePosition,
  createEmptyBoardPiece,
  findTileByPosition,
  movePieceToTile
} from './core';

export function handlePawnHighlight(piece, tiles) {
  const targetTilePosition = calculateTargetTilePosition( piece, 1, 0 );
  const targetTile = findTileByPosition(tiles,
    targetTilePosition.rowIndex,
    targetTilePosition.cellIndex
  );
  
  if ( (piece.position.rowIndex === 6 || piece.position.rowIndex === 1) && !targetTile.piece.pieceComponent ) {
    const secondTargetTilePosition = calculateTargetTilePosition( piece, 2, 0 );
    const secondTile = findTileByPosition(
      tiles,
      secondTargetTilePosition.rowIndex,
      secondTargetTilePosition.cellIndex
    );    
    secondTile.highlighted = true;
  }

  if ( !targetTile.piece.pieceComponent ) {
    targetTile.highlighted = true;
  }

  const leftTargetPosition = calculateTargetTilePosition(piece, 1, -1);
  
  const leftValidTargetTile = findTileByPosition(tiles,
    leftTargetPosition.rowIndex,
    leftTargetPosition.cellIndex
    );

  if (leftValidTargetTile &&
      leftValidTargetTile.piece.pieceComponent &&
      leftValidTargetTile.piece.originalPosition !== piece.originalPosition ) {
    leftValidTargetTile.highlighted = true;      
  }

  const rightTargetPosition = calculateTargetTilePosition(piece, 1, 1);  
  const rightValidTargetTile = findTileByPosition(tiles,
    rightTargetPosition.rowIndex,
    rightTargetPosition.cellIndex
  );

  if (rightValidTargetTile &&
      rightValidTargetTile.piece.pieceComponent &&
      rightValidTargetTile.piece.originalPosition !== piece.originalPosition ) {
    rightValidTargetTile.highlighted = true;
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
    movePieceToTile(piece, tiles, tileTarget);
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
      movePieceToTile(piece, tiles, tileTarget);
      return [piece, tiles];
    } 
  }
}

export function handlePawnAttack(piece, tiles, tileTarget) {  
  const leftTargetPosition = calculateTargetTilePosition(piece, 1, -1);
  const leftValidTargetTile = findTileByPosition(tiles,
    leftTargetPosition.rowIndex,
    leftTargetPosition.cellIndex
  );
  
  if ( leftValidTargetTile === tileTarget ) {
    if ( leftValidTargetTile.piece.originalPosition !== piece.originalPosition ) {
      movePieceToTile(piece, tiles, tileTarget);      
    }
    return [piece, tiles];
  }

  const rightTargetPosition = calculateTargetTilePosition(piece, 1, 1);  
  const rightValidTargetTile = findTileByPosition(tiles,
    rightTargetPosition.rowIndex,
    rightTargetPosition.cellIndex
  );
  
  if ( rightValidTargetTile === tileTarget ) {
    if ( rightValidTargetTile.piece.originalPosition !== piece.originalPosition ) {
      movePieceToTile(piece, tiles, tileTarget);      
    }
    return [piece, tiles];
  }
  
}
