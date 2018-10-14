// import AppComponent from './app.component';

const answers = [
    "Sí",
    "Ya te digo",
    "Faltaría más",
    "Efectivamente",
    "Uuuh... ¿sí?",
    "No sabria decirte...",
    "A mí que me dices, yo solo soy una bola 8",
    "No tengo ni idea, Hulio",
    "Qué va, qué va, qué va...",
    "Nop",
    "Ni de coña",
    "¡Ja! Ni en sueños"
];

// angular.module('app')
//     .service('answersService', () => {
//         this.answer = () => {
//             const randomIndex = Math.floor( Math.random () * answers.length);
//             return answers[randomIndex];
//         }
//     }
// );

// export default answersService;

// import answersArray from '../answers.js';



// function prediction() {
//   return {
//     responde: (question) => {
//       let randomIndex = (Math.floor(Math.random() * answersArray.lenght));
//       return {
//         question,
//         answer: answersArray[randomIndex]
//       }
//     }
//   }
// }
// export default prediction;

let answersService = {
    answer: function () {
        const randomIndex = Math.floor( Math.random () * answers.length);
    return answers[randomIndex]; } 
}

export default answersService;