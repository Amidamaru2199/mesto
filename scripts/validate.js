const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__field',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__field_invalid',
    errorClass: 'popup__error'
  };
  
  function enableValidation(config) {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    
    forms.forEach(addListenersToForm);
  };
  
  enableValidation(config);
  
  function addListenersToForm(form) {
    const inputs = Array.from(document.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);
    inputs.forEach((input) => {
      addListenersToInput(input, form, button)
    });
  };
  
  function toogleButton(form, btn) {
    const isFormInvalid = !form.checkValidity();
    
    btn.disabled = isFormInvalid;
    btn.classList.toggle(config.inactiveButtonClass, isFormInvalid);
  };
  
  function addListenersToInput(input, form, btn) {
    input.addEventListener('input', (evt) => {
      handleFieldValidation(evt);
      toogleButton(form, btn);
    });
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