import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initialCards.js';
import '../pages/index.css'; // добавьте импорт главного файла стилей
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';
                
const editPopupElement = document.querySelector('.popup_type_edit');//попап для редактирования профиля
const editPopupOpenButtonElement = document.querySelector('.profile__edit-button');//кнопка для открытия попапа редактирования профиля
const editFormElement = editPopupElement.querySelector('.popup__form');//форма попапа редактирования профиля
const nameInput = editFormElement.querySelector('#name-field');//поле ввода из формы попапа редактирования профиля
const jobInput = editFormElement.querySelector('#profession-field');//поле ввода из формы попапа редактирования профиля
const editFormElementButton = editFormElement.querySelector('.popup__button');//кнопка из формы попапа редактирования профиля

const cardPopupElement = document.querySelector('.popup_type_card');//попап для добавления карточек
const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');//кнопка для открытия попапа добавления карточек

const addFormElement = cardPopupElement.querySelector('.popup__form');//форма попапа добавления карточек

const addFormElementButton = addFormElement.querySelector('.popup__button');//кнопка из формы попапа добавления карточек

export const imagePopupElement = document.querySelector('.popup-image');//попап картинка

export const newPopupWithImage = new PopupWithImage('.popup-image');
newPopupWithImage.setEventListeners();

const newUserInfo = new UserInfo({name: '.profile__name', profession: '.profile__description'})

const newEditPopup = new Popup('.popup_type_edit');
const newCardPopup = new Popup('.popup_type_card');

newEditPopup.setEventListeners();
newCardPopup.setEventListeners();

editPopupOpenButtonElement.addEventListener('click', function() {//открытие для попапа редактирования
  editFormValidator.toogleButton(editFormElement, editFormElementButton);
  const userInfo = newUserInfo.getUserInfo()
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.profession;
  newEditPopup.open();
});

cardPopupOpenButtonElement.addEventListener('click', function() {//открытие для попапа добавления карточек
  newCardPopup.open();
  addFormValidator.toogleButton(addFormElement, addFormElementButton);
});

const newPopupWithForm = new PopupWithForm('.popup_type_edit', submitEditProfileForm);

newPopupWithForm.setEventListeners()

function submitEditProfileForm (data) {//берёт знчение из попапа и вставляет в профиль
  newUserInfo.setUserInfo(data)
  newPopupWithForm.close();
};

const newCardPopupWithForm = new PopupWithForm('.popup_type_card', submitAddCardForm);

newCardPopupWithForm.setEventListeners()

function submitAddCardForm (data) {//берёт знчение из попапа и вставляет в карточки
  const jjj = createCard(data);
  newSection.addItem(jjj);
  newCardPopupWithForm.close();
};

function handleCardClick({src, text, alt}) {
  newPopupWithImage.open({src, text, alt});
}

function createCard(item) {
  const newCard = new Card(item, '.item_template', handleCardClick).generateCard();
  return newCard;
};

const newSection = new Section({
  items: initialCards,
  renderer: function(item) {
    const kkk = createCard(item);
    newSection.addItem(kkk);
  }
}, '.elements');

newSection.renderItems();

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__field_invalid',
  errorClass: 'popup__error'
};

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();