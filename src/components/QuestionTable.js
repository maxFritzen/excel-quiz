import React from 'react';

import Alternative from './Alternative';
import Question from './Question';

const QuestionTable = (props) => (
  <div>
     QuestionTable
     <Question question={props.question}/>
     <Alternative
       alternative={props.alternatives[0]}
       storeAnswer={props.storeAnswer}
     />
     <Alternative
       alternative={props.alternatives[1]}
       storeAnswer={props.storeAnswer}
     />
  </div>
);

export default QuestionTable;
