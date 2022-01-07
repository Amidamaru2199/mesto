export class FormValidator {
    constructor(config, form) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = form;
        this._submitButton = this._form.querySelector(config.submitButtonSelector);
        //this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector);
        this._inputs = Array.from(this._form.querySelectorAll(config.inputSelector));
    }

    enableValidation() {
      this._addListenersToForm();
    };

    _addListenersToForm() {
      //const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));//находим массив полей ввода '.popup__field'
      //const button = this._form.querySelector(this._submitButtonSelector);//находим кнопку внутри формы '.popup__button'
      this._inputs.forEach((input) => {
        this._addListenersToInput(input)
      });
    };

    _addListenersToInput(input) {
      input.addEventListener('input', (evt) => {
        this._handleFieldValidation(evt);
        this.toogleButton();
      });
    };

    toogleButton() {
        const isFormInvalid = !this._form.checkValidity();
        
        this._submitButton.disabled = isFormInvalid;
        this._submitButton.classList.toggle(this._inactiveButtonClass, isFormInvalid);
      };

    _handleFieldValidation(evt) {//функция добавления 
      const element = evt.target
      const errorContainer = this._form.querySelector(`.${element.id}-error`);
      if (!element.validity.valid) {
        element.classList.add(this._inputErrorClass);
      } else {
        element.classList.remove(this._inputErrorClass);
      }
      errorContainer.textContent = element.validationMessage;
    };
};