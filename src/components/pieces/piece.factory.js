import React from 'react';
import King from "./King";
import Bishop from "./Bishop";
import Queen from "./Queen";
import Pawn from "./Pawn";
import Knight from "./Knight";
import Rook from "./Rook";

export const PieceFactory = ( type, color) => {
  switch (type.toLowerCase()) {
    case 'king':
      return <King color={color} />;
    
    case 'queen':
      return <Queen color={color} />;

    case 'pawn':
      return <Pawn color={color} />;

    case 'bishop':
      return <Bishop color={color} />;
    
    case 'knight':
      return <Knight color={color} />;
    
    case 'rook':
      return <Rook color={color} />;

    default:
      return null;
  }

}