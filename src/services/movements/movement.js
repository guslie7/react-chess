import { handlePawnHighlight, handlePawnMovement, handlePawnAttack } from "./pawn";
import { handleKnightHighlight, handleKnightMovement } from "./knight";
import { handleBishopHighlight, handleBishopMovement } from "./bishop";

export function handlePieceHighlight( piece, tiles ) {
  if (piece.type === 'pawn') {
    return handlePawnHighlight(piece, tiles);
  }

  if (piece.type === 'knight') {
    return handleKnightHighlight(piece, tiles);
  }

  if (piece.type === 'bishop') {
    return handleBishopHighlight(piece, tiles);
  }
}

export function handlePieceMovement( piece, tiles, tileTarget ) {
  if (piece.type === 'pawn') {
    return handlePawnMovement(piece, tiles, tileTarget);
  }

  if (piece.type === 'knight') {
    return handleKnightMovement(piece, tiles, tileTarget);
  }

  if (piece.type === 'bishop') {
    return handleBishopMovement(piece, tiles, tileTarget);
  }
}

export function handlePieceAttack( piece, tiles, tileTarget ) {
  if (piece.type === 'pawn') {
    return handlePawnAttack(piece, tiles, tileTarget);
  }
  if (piece.type === 'knight') {
    return handleKnightMovement(piece, tiles, tileTarget);
  }

  if (piece.type === 'bishop') {
    return handleBishopMovement(piece, tiles, tileTarget);
  }
}