import React from 'react';
import './Display.css';

function Display(props) {
  return (
    <div id="display">
      {props.displayText}
    </div>
  );
}

export default Display;
