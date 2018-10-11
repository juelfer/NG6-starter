import template from './inputQuestion.html';
import controller from './inputQuestion.controller';
import './inputQuestion.scss';

let inputQuestionComponent = {
  bindings: {
    submit: '&'
  },
  template,
  controller
};

export default inputQuestionComponent;
