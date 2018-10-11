import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import prediction from './services/answersService';

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent)
  .factory('prediction', prediction);

  // const answers = [
  //   "Sí",
  //   "Ya te digo",
  //   "Faltaría más",
  //   "Efectivamente",
  //   "Uuuh... ¿sí?",
  //   "No sabria decirte...",
  //   "A mí que me dices, yo solo soy una bola 8",
  //   "No tengo ni idea, Hulio",
  //   "Qué va, qué va, qué va...",
  //   "Nop",
  //   "Ni de coña",
  //   "¡Ja! Ni en sueños"
  // ];

