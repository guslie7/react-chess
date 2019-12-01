export function handlePieceHighlight( piece, tiles ) {
  if (piece.type === 'pawn') {
    return handlePawnHighlight(piece, tiles);
  }
}

export function handlePieceMovement( piece, tiles, tileTarget ) {
  if (piece.type === 'pawn') {
    return handlePawnMovement(piece, tiles, tileTarget);
  }
}

function handlePawnHighlight(piece, tiles) {
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

function handlePawnMovement(piece, tiles, tileTarget) {
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

function calculateTargetTilePosition( piece, baseSumX, baseSumY ) {
  const [finalBaseX, finalBaseY] = applyOriginalPositionModifier( piece.originalPosition, baseSumX, baseSumY );
  return {
    rowIndex: piece.position.rowIndex + finalBaseX,
    cellIndex: piece.position.cellIndex + finalBaseY
  }
}

function applyOriginalPositionModifier(originalPosition, baseSumX, baseSumY) { 
  if (originalPosition === 'FROM_BOTTOM') {
    return [ baseSumX * -1, baseSumY * -1 ];
  }
  return [baseSumX, baseSumY];
}

function findTileByPosition( tiles, rowIndex, cellIndex ) {

  return tiles.find( (tile) => { 
    return tile.position.rowIndex === rowIndex &&
      tile.position.cellIndex === cellIndex;
  });

}

function createEmptyBoardPiece( position ) {
  return {
    pieceComponent: null,
    position,
    type: '',
    originalPosition: ''
  }
}