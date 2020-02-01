import { calculateTargetTilePosition, findTileByPosition, movePieceToTile } from "./core";

function getTilesPosition ( piece ) {  
  const arrPositions = [];  
  const upwards = [0,1,2,3,4,5,6,7];
  const downwards = [7,6,5,4,3,2,1,0];

  arrPositions.push( upwards.map( (index) => {
    return calculateTargetTilePosition(piece, index, index*-1);
  }));

  arrPositions.push( downwards.map( (index) => {
    return calculateTargetTilePosition(piece, index*-1, index);
  }));

  arrPositions.push( upwards.map( (index) => {
    return calculateTargetTilePosition(piece, index, index);
  }));

  arrPositions.push( downwards.map( (index) => {
    let realIdx = index * -1;
    return calculateTargetTilePosition(piece, realIdx, realIdx);
  }));
  return arrPositions;
}

export function handleBishopHighlight(piece, tiles) {
  const tilePositions = getTilesPosition(piece);  
  const foundTiles = tilePositions
    .map(laneArr => 
      laneArr.map( (tilePos) => findTileByPosition(tiles, tilePos.rowIndex, tilePos.cellIndex) )      
      .filter(tiles => !!tiles));
  
  console.log(foundTiles);
  

  for (let laneIndex = 0; laneIndex < foundTiles.length; laneIndex++) {
    const currentLane = foundTiles[laneIndex];
    
    for (let index = 0; index < currentLane.length; index++) {
      const currentTile = currentLane[index];      
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
  }
  return [piece, tiles];  
}

export function handleBishopMovement(piece, tiles, tileTarget) {
  const tilePositions = getTilesPosition(piece);  
  const foundTiles = tilePositions
    .map(laneArr => 
      laneArr.map( (tilePos) => findTileByPosition(tiles, tilePos.rowIndex, tilePos.cellIndex) )      
      .filter(tiles => !!tiles));  
  
  const targetTiles = foundTiles.reduce( (sum, currentLane) => {
    return sum.concat(currentLane.filter( (currentTile) => {
      let itsOver = false;
      if ( currentTile && !itsOver ) {
        if (
          currentTile.piece.originalPosition === piece.originalPosition &&
          currentTile !== tileTarget ) {
          itsOver = true;
        }
        return true;
      }
      return false;
    }));
  }, []);

  if ( targetTiles.some( target => target === tileTarget ) ) {
    movePieceToTile( piece, tiles, tileTarget );
    return [piece, tiles];    
  }
}