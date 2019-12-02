import { calculateTargetTilePosition, findTileByPosition, movePieceToTile } from "./core";

function getTilesPosition ( piece ) {
  return (
    [
      calculateTargetTilePosition( piece, 2, -1 ),
      calculateTargetTilePosition( piece, 2, 1 ),
      calculateTargetTilePosition( piece, 1, -2 ),
      calculateTargetTilePosition( piece, 1, 2 ),
      calculateTargetTilePosition( piece, -2, -1 ),
      calculateTargetTilePosition( piece, -2, 1 ),
      calculateTargetTilePosition( piece, -1, -2 ),
      calculateTargetTilePosition( piece, -1, 2 )
    ]
  );
}

export function handleKnightHighlight(piece, tiles) {
  const tilePositions = getTilesPosition(piece);
  tilePositions.forEach((tilePosition) => {
    const currentTile = findTileByPosition(tiles,
      tilePosition.rowIndex,
      tilePosition.cellIndex
    );
    if (currentTile && currentTile.piece.originalPosition !== piece.originalPosition) {
      currentTile.highlighted = true;    
    }
  });
  return [piece, tiles];
}

export function handleKnightMovement(piece, tiles, tileTarget) {
  const tilePositions = getTilesPosition(piece);
  const matchingTile = tilePositions
    .map( (tilePosition) =>
      findTileByPosition(tiles, tilePosition.rowIndex, tilePosition.cellIndex) )
    .find((tile) =>  tile === tileTarget);  
  
  if (matchingTile) {
    movePieceToTile(piece, tiles, matchingTile);
  }
  return [piece, tiles];
}

export function handleKnightAttack(piece, tiles, tileTarget) {

  const tilePositions = getTilesPosition(piece);
  const matchingTile = tilePositions
    .map( (tilePosition) =>
      findTileByPosition(tiles, tilePosition.rowIndex, tilePosition.cellIndex) )
    .find((tile) =>  tile === tileTarget);

  if ( matchingTile && matchingTile.piece.originalPosition !== piece.originalPosition ) {
    movePieceToTile(piece, tiles, matchingTile);
  }
  
}