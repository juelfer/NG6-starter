class InputQuestionController {
  constructor() {
    this.question = '';
  }
  onSubmit() {
    this.submit({question:this.question});
    this.question = '';
  }
}

export default InputQuestionController;
