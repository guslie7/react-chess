import React from 'react';
import classNames from 'classnames';

export default (props) => {
  const classes = classNames({
    tile: true,
    'tile--alternate': props.alternate,
    'tile-highlighted': props.highlighted
  });

  return (
    <div onClick={props.handleTileClick} className={classes}>
      {props.piece}
    </div>
  );
}