import React from "react";
import { ReactComponent as BRook } from './../../assets/pieces-svgo/black_rook.svg';
import { ReactComponent as WRook } from './../../assets/pieces-svgo/white_rook.svg';
import Piece from "./Piece";

export default (props) => {

  if ( props.color === 'w' ) {
    return <Piece {...props} ><WRook/></Piece>;
  }
  return <Piece {...props} ><BRook /></Piece>;

}