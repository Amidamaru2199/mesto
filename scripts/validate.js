const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error'
  };
  
  function enableValidation() {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    
    forms.forEach(addListenersToForm);
  };
  
  enableValidation();
  
  function addListenersToForm(form) {
    const inputs = Array.from(document.querySelectorAll(config.inputSelector));
  
    inputs.forEach(addListenersToInput);
  
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    form.addEventListener('input', handleFormInput);
    toogleButton(form);
  };
  
  function handleFormInput(evt) {
    toogleButton(evt.currentTarget)
  };
  
  function toogleButton(form) {
    const button = form.querySelector(config.submitButtonSelector);
    const isFormInvalid = !form.checkValidity();
    
    button.disabled = isFormInvalid;
    button.classList.toggle(config.inactiveButtonClass, isFormInvalid);
  };
  
  function addListenersToInput(input) {
    input.addEventListener('input', handleFieldValidation);
  };
  
  function handleFieldValidation(evt) {//функция добавления 
    const element = evt.target
    const errorContainer = document.querySelector(`#${element.id}-error`);
    if (!element.validity.valid) {
      element.classList.add(config.inputErrorClass);
    } else {
      element.classList.remove(config.inputErrorClass);
    }
    errorContainer.textContent = element.validationMessage;
  };