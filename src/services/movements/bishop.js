import { calculateTargetTilePosition, findTileByPosition, movePieceToTile } from "./core";

function getTilesPosition ( piece ) {
  
  const arrPositions = [];
  const currentX = piece.position.rowIndex;
  const currentY = piece.position.cellIndex;
  //first quarter
  const firstQuarterLimit = (7 - currentY) - ( 7 - currentX);
  

  for (let index = 0; index <= firstQuarterLimit; index++) {
    arrPositions.push( calculateTargetTilePosition(piece, index, index) );
  }
  return arrPositions;
}

export function handleBishopHighlight(piece, tiles) {

  const tilePositions = getTilesPosition(piece);
  for (let index = 1; index < tilePositions.length; index++) {
    const tilePosition = tilePositions[index];
    const currentTile = findTileByPosition(tiles,
      tilePosition.rowIndex,
      tilePosition.cellIndex
    );
    if ( currentTile ) {
      if ( currentTile.piece.originalPosition !== ''  ) {        
        if (currentTile.piece.originalPosition !== piece.originalPosition) {
          currentTile.highlighted = true;          
        }
        break;
      }
      currentTile.highlighted = true;
    }      
  }
  return [piece, tiles];
  
}

export function handleBishopMovement(piece, tiles, tileTarget) {
  const tilePositions = getTilesPosition(piece);
  tilePositions.shift();
  let itsOver = false;
  const targetTiles = tilePositions.reduce( (sum, tilePosition) => {    
    const currentTile = findTileByPosition(tiles,
      tilePosition.rowIndex,
      tilePosition.cellIndex
    );
    if ( currentTile && !itsOver ) {      
      if ( currentTile.piece.originalPosition === piece.originalPosition ) {
        itsOver = true;
        return sum;
      }
      sum.push(currentTile);
    }
    return sum;
  }, []);

  if ( targetTiles.some( target => target === tileTarget ) ) {
    movePieceToTile( piece, tiles, tileTarget );
    return [piece, tiles];    
  }
}