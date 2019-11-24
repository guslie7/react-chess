import React from "react";
import { ReactComponent as BKing } from './../../assets/pieces-svgo/black_king.svg';
import { ReactComponent as WKing } from './../../assets/pieces-svgo/white_king.svg';
import Piece from "./Piece";

export default (props) => {

  if ( props.color === 'w' ) {
    return <Piece {...props} ><WKing></WKing></Piece>;
  }
  return <Piece {...props} ><BKing /></Piece>;

}