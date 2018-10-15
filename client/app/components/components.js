import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import inputQuestion from './inputQuestion/inputQuestion';
import outputQuestion from './outputQuestion/outputQuestion';

let componentModule = angular.module('app.components', [
    Home,
    About,
    inputQuestion,
    outputQuestion
  ])

  .name;

export default componentModule;
