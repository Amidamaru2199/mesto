export class FormValidator {
    constructor(config, form) {
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._form = form;
    }

    enableValidation() {
      this._addListenersToForm(this._form);
    };

    _addListenersToForm(form) {
      const inputs = Array.from(this._form.querySelectorAll(this._inputSelector));//находим массив полей ввода '.popup__field'
      const button = form.querySelector(this._submitButtonSelector);//находим кнопку внутри формы '.popup__button'
      inputs.forEach((input) => {
        this._addListenersToInput(input, this._form, button)
      });
    };

    _addListenersToInput(input, form, btn) {
      input.addEventListener('input', (evt) => {
        this._handleFieldValidation(evt);
        this.toogleButton(this._form, btn);
      });
    };

    toogleButton(form, btn) {
        const isFormInvalid = !form.checkValidity();
        
        btn.disabled = isFormInvalid;
        btn.classList.toggle(this._inactiveButtonClass, isFormInvalid);
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