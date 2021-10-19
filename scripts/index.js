const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    nameInput.value = nameElement.textContent;
    jobInput.value = descriptionElement.textContent;
    popupElement.classList.add('popup_is-opened');
};

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);



const formElement = document.querySelector('.popup__form');

const nameInput = formElement.querySelector('#name-field');
const jobInput = formElement.querySelector('#profession-field');

const nameElement = document.querySelector('.profile__name');
const descriptionElement = document.querySelector('.profile__description');

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    nameElement.textContent = nameInput.value;
    descriptionElement.textContent = jobInput.value;
};

formElement.addEventListener('submit', formSubmitHandler);

const popupAddEndCloseButton = document.querySelector('.popup__button');
popupAddEndCloseButton.addEventListener('click', closePopup);















/*const vectorElement = document.querySelector('.element__vector');

const toggleVector = function() {
    vectorElement.classList.toggle('element__vector_active');
};

vectorElement.addEventListener('click', toggleVector);*/