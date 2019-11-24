import React from "react";
import { ReactComponent as BKnight } from './../../assets/pieces-svgo/black_knight.svg';
import { ReactComponent as WKnight } from './../../assets/pieces-svgo/white_knight.svg';
import Piece from "./Piece";

export default (props) => {

  if ( props.color === 'w' ) {
    return <Piece {...props} ><WKnight/></Piece>;
  }
  return <Piece {...props} ><BKnight /></Piece>;

}