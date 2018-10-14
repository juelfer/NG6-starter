import template from './app.html';
import './app.scss';
// import prediction from './services/answersService.js';
import answersService from './services/answersService.js';

let appComponent = {
  template,
  controller: function() {   //Hay que importar e inyectar el servicio
    this.onNewQuestion = question => {
      this.records.push( {
        question,
        answer: answersService.answer()        //Aquí llamaremos a la función en el service que escogerá la respuesta al azar
      })
    }
    this.records = [
      {
        question: 'ganará el madrid la copa?',
        answer: 'yo que se hulio'
      }
    ]
  }
};

export default appComponent;
