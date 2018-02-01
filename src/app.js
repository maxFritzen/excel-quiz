import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import LoadingPage from './components/LoadingPage';

const App = () => (
  <div>
    <p>excel</p>
  </div>
);

let hasRendered = false;
console.log('hasrender', hasRendered);
const renderApp =  () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('app'));
    hasRendered = true;
    console.log('hasrender', hasRendered);
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));
renderApp();
