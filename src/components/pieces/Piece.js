import React from 'react';

export default (props) => {
  return (
    <div className="piece">
      { props.pieceImage ?
        <img src={props.pieceImage} alt="piece" />        
      :
        props.children
      }
    </div>
  );
}