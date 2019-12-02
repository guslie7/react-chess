import { handlePawnHighlight, handlePawnMovement, handlePawnAttack } from "./pawn";

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

export function handlePieceAttack( piece, tiles, tileTarget ) {
  if (piece.type === 'pawn') {
    return handlePawnAttack(piece, tiles, tileTarget);
  }
}