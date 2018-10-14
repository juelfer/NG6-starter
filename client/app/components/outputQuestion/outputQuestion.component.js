import template from './outputQuestion.html';
import './outputQuestion.scss';

let outputQuestionComponent = {
  bindings: {
    answers: '<',  
  },
  template
};

export default outputQuestionComponent;
