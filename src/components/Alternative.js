import React from 'react';

const Alternative = (props) => (
  <div>
    Alternative: <button onClick={() => props.storeAnswer(props.alternative)}>{props.alternative}</button>
  </div>
);

export default Alternative;
