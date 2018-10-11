import angular from 'angular';
import uiRouter from 'angular-ui-router';
import outputQuestionComponent from './outputQuestion.component';

let outputQuestionModule = angular.module('outputQuestion', [
  uiRouter
])

.component('outputQuestion', outputQuestionComponent)

.name;

export default outputQuestionModule;
