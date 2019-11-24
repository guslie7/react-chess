import React from "react";
import { ReactComponent as BQueen } from './../../assets/pieces-svgo/black_queen.svg';
import { ReactComponent as WQueen } from './../../assets/pieces-svgo/white_queen.svg';
import Piece from "./Piece";

export default (props) => {

  if ( props.color === 'w' ) {
    return <Piece {...props} ><WQueen/></Piece>;
  }
  return <Piece {...props} ><BQueen /></Piece>;

}