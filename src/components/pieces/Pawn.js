import React from "react";
import { ReactComponent as BPawn } from './../../assets/pieces-svgo/black_pawn.svg';
import { ReactComponent as WPawn } from './../../assets/pieces-svgo/white_pawn.svg';
import Piece from "./Piece";

export default (props) => {

  if ( props.color === 'w' ) {
    return <Piece {...props} ><WPawn/></Piece>;
  }
  return <Piece {...props} ><BPawn /></Piece>;

}