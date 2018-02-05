import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';
import Game from './components/Game';

// const path = require('path');
// const API = path.join(__dirname, 'questions.json');
//
// class Fetch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: false,
//       error: null,
//       level: '',
//       question: '',
//       alternatives: '',
//       correct: ''
//     }
//   }
//   componentDidMount() { //byt ut mot async senare?
//     this.setState({ isLoading: true });
//     fetch(API)
//     .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error('Something went wrong ...');
//         }
//       })
//       .then(data => {
//         // console.log(data);
//         // console.log(data.easy);
//         // console.log(data.easy[1].question);
//         this.setState({
//           question: data.easy[1].question,
//           alternatives: data.easy[1].alternatives,
//           correct: data.easy[1].correct,
//           isLoading: false
//         });
//         })
//       .catch(error => this.setState({ error, isLoading: false }));
//   }
//
//   render() {
//     if (this.state.error) {
//       return <p>{error.message}</p>;
//     }
//     if (this.state.isLoading) {
//       return <LoadingPage />;
//     }
//     return (
//       <div>
//         <p>{this.state.question}</p>
//         <p>Alternatives: {this.state.alternatives}</p>
//         <p>correct answer is: {this.state.correct}</p>
//       </div>
//     );
//   }
// }


const App = () => (
  <div className="content-container">
    <Game />
  </div>
);

let hasRendered = false;
//console.log('hasrender', hasRendered);
const renderApp =  () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('app'));
    hasRendered = true;
  //  console.log('hasrender', hasRendered);
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
renderApp();
