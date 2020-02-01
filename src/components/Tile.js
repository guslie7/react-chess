import React from 'react';
import classNames from 'classnames';

export default (props) => {
  const classes = classNames({
    tile: true,
    'tile--alternate': props.alternate,
    'tile--highlighted': props.highlighted,
    'tile--has-piece': props.hasPiece
  });

  return (
    <div onClick={props.handleTileClick} className={classes}>
      {props.tile.position.rowIndex} -
      {props.tile.position.cellIndex}
      {props.piece}
    </div>
  );
}