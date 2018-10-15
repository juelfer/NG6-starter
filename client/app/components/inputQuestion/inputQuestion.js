import angular from 'angular';
import uiRouter from 'angular-ui-router';
import inputQuestionComponent from './inputQuestion.component';

let inputQuestionModule = angular.module('inputQuestion', [
    uiRouter
  ])

  .component('inputQuestion', inputQuestionComponent)

  .name;

export default inputQuestionModule;
