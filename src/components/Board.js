import React from 'react';
import Tile from './Tile';
import King from './pieces/King';

export default (props) => {  
  const tileRow = ( rowIndex ) => {
    return [0,1,2,3,4,5,6,7].map((item) => {
      return <Tile
        alternate={ ( rowIndex + item ) % 2 !== 0 }
        key={item+rowIndex} 
        piece={<King />}></Tile>
    });
  }
  return (<div className="board"> { [0,1,2,3,4,5,6,7].map((item) => {
    return tileRow( item );
  }) } </div>);
} 