import template from './app.html';
import './app.scss';
import answersService from './services/answersService.js';

let appComponent = {
  template,
  controller: function() {   
    this.onNewQuestion = question => {
      this.records.push( {
        question,
        prediction: answersService.prediction(),
      })
    }
    this.records = []
  }
};

export default appComponent;
