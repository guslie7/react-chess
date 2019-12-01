export function calculateTargetTilePosition( piece, baseSumX, baseSumY ) {
  const [finalBaseX, finalBaseY] = applyOriginalPositionModifier( piece.originalPosition, baseSumX, baseSumY );
  return {
    rowIndex: piece.position.rowIndex + finalBaseX,
    cellIndex: piece.position.cellIndex + finalBaseY
  }
}

export function applyOriginalPositionModifier(originalPosition, baseSumX, baseSumY) { 
  if (originalPosition === 'FROM_BOTTOM') {
    return [ baseSumX * -1, baseSumY * -1 ];
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