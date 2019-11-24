import React from "react";
import { ReactComponent as BBishop } from './../../assets/pieces-svgo/black_bishop.svg';
import { ReactComponent as WBishop } from './../../assets/pieces-svgo/white_bishop.svg';
import Piece from "./Piece";

export default (props) => {

  if ( props.color === 'w' ) {
    return <Piece {...props} ><WBishop/></Piece>;
  }
  return <Piece {...props} ><BBishop /></Piece>;

}