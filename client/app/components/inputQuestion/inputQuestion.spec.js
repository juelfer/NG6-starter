import InputQuestionModule from './inputQuestion';
import InputQuestionController from './inputQuestion.controller';
import InputQuestionComponent from './inputQuestion.component';
import InputQuestionTemplate from './inputQuestion.html';

describe('InputQuestion', () => {
  let $rootScope, makeController;

  beforeEach(window.module(InputQuestionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new InputQuestionController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(InputQuestionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = InputQuestionComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(InputQuestionTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(InputQuestionController);
    });
  });
});
