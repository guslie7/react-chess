export function calculateTargetTilePosition( piece, baseSumX, baseSumY ) {
  const [finalBaseX, finalBaseY] = applyOriginalPositionModifier( piece.originalPosition, baseSumX, baseSumY );
  return {
    rowIndex: piece.position.rowIndex + finalBaseX,
    cellIndex: piece.position.cellIndex + finalBaseY
  }
}

export function applyOriginalPositionModifier(originalPosition, baseSumX, baseSumY) { 
  if (originalPosition === 'FROM_BOTTOM') {
    return [ baseSumX * -1, baseSumY];
  }
  return [baseSumX, baseSumY];
}

export function findTileByPosition( tiles, rowIndex, cellIndex ) {
  return tiles.find( (tile) => { 
    return tile.position.rowIndex === rowIndex &&
      tile.position.cellIndex === cellIndex;
  });
}

export function createEmptyBoardPiece( position ) {
  return {
    pieceComponent: null,
    position,
    type: '',
    originalPosition: ''
  }
}

export function movePieceToTile( piece, tiles, targetTile ) {
  const originalTile = findTileByPosition( tiles, piece.position.rowIndex, piece.position.cellIndex );
  originalTile.piece = createEmptyBoardPiece( {...originalTile.position} );
  piece.position = {...targetTile.position};
  targetTile.piece = piece;
  return targetTile;

}