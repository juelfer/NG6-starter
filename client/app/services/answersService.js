const answers = [{
    text: "Sí",
    type: "affirmative"
  },
  {
    text: "Ya te digo",
    type: "affirmative"
  },
  {
    text: "Faltaría más",
    type: "affirmative"
  },
  {
    text: "Efectivamente",
    type: "affirmative"
  },
  {
    text: "Uuuh... ¿sí?",
    type: "dubious"
  },
  {
    text: "No sabria decirte...",
    type: "dubious"
  },
  {
    text: "A mí que me dices, yo solo soy una bola 8",
    type: "dubious"
  },
  {
    text: "No tengo ni idea, Hulio",
    type: "dubious"
  },
  {
    text: "Qué va, qué va, qué va...",
    type: "negative"
  },
  {
    text: "Nop",
    type: "negative"
  },
  {
    text: "Ni de coña",
    type: "negative"
  },
  {
    text: "¡Ja! Ni en sueños",
    type: "negative"
  }
];

let answersService = {
  prediction: function () {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex];
  }
}

export default answersService;
