import React from 'react';

import Action from './Action';
import QuestionTable from './QuestionTable';

const alternatives = [2, 6]

const path = require('path');
const API = path.join(__dirname, 'questions.json');

let DATA = {};


export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      level: '',
      question: '',
      alternatives: [],
      correct: '',
      isLoading: false,
      error: null
    }
    this.number = 1;
    this.level = 'easy';
    this.answers = [];
    this.correctAnswers = [];
  }

  componentDidMount() { //byt ut mot async senare?
    this.setState({ isLoading: true });
    fetch(API)
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        // console.log(data);
        // console.log(data.easy);
        // console.log(data.easy[1].question);
        //Istället för att ändra state här, lagrar jag frågorna i variable
        DATA = data;

        })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleClick = () => {
    this.newQuestion(this.number, this.level);
    this.number++;
    this.newLevel('medium');
  };

  storeAnswer = (answer) => {
    console.log('handleAnswer');
    console.log(answer);
    this.answers = [
      ...this.answers,
      answer
    ];
    console.log(this.answers);
  };

  storeCorrectAnswers = (correctAnswer) => {
    this.correctAnswers = [
      ...this.correctAnswers,
      correctAnswer
    ];
    console.log(this.correctAnswers);
  };

  newLevel = (newLevel) => {
    this.level = newLevel;
  };

  newQuestion = (number, level = 'easy') => {
    console.log(level);
    console.log(DATA[level]);

    if(DATA[level][number] != null || undefined) {
      this.storeCorrectAnswers(DATA[level][number].correct);
      this.setState({
        question: DATA[level][number].question,
        alternatives: DATA[level][number].alternatives,
        correct: DATA[level][number].correct
      });
    } else {
      console.log('Something went wrong with the questions');
    }


  };

  render() {
    return (
      <div>
        Game
        <QuestionTable
          question={this.state.question}
          alternatives={this.state.alternatives}
          storeAnswer={this.storeAnswer}
        />
        <Action handleClick={this.handleClick}/>
      </div>
    );
  }
}
;
