import React from 'react';

const Action = (props) => (
  <div>
     Action:
     <button onClick={props.handleClick}>Nästa fråga</button>
  </div>
);

export default Action;
