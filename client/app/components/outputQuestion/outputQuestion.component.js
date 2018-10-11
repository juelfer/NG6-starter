import template from './outputQuestion.html';
import './outputQuestion.scss';

let outputQuestionComponent = {
  bindings: {
    answers: '<'   //Se lo pasa el padre
  },
  template
};

export default outputQuestionComponent;
