import React from 'react';
import classNames from 'classnames';

export default (props) => {

  const classes = classNames({
    tile: true,
    'tile--alternate': props.alternate
  });

  return (
    <div className={classes}>
      {props.piece}
    </div>
  );
}