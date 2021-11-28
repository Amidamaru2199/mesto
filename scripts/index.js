import {Card} from './Card.js';
import { FormValidator } from './FormValidator.js';
                
const editPopupElement = document.querySelector('.popup_type_edit');//попап для редактирования профиля
const editPopupCloseButtonElement = editPopupElement.querySelector('.popup__close-button');//кнопка для закрытия попапа редактирования профиля
const editPopupOpenButtonElement = document.querySelector('.profile__edit-button');//кнопка для открытия попапа редактирования профиля
const editFormElement = editPopupElement.querySelector('.popup__form');//форма попапа редактирования профиля
const nameInput = editFormElement.querySelector('#name-field');//поле ввода из формы попапа редактирования профиля
const jobInput = editFormElement.querySelector('#profession-field');//поле ввода из формы попапа редактирования профиля
const nameElement = document.querySelector('.profile__name');//имя из профиля
const descriptionElement = document.querySelector('.profile__description');//профессия из профиля
const editFormElementButton = editFormElement.querySelector('.popup__button');//кнопка из формы попапа редактирования профиля

const cardPopupElement = document.querySelector('.popup_type_card');//попап для добавления карточек
const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');//кнопка для открытия попапа добавления карточек
const cardPopupCloseButtonElement = cardPopupElement.querySelector('.popup__close-button');//кнопка для закрытия попапа добавления карточек

const list = document.querySelector('.elements');//пустая секция для карточек
const itemTemplate = document.querySelector('.item_template');//шаблон карточек
const addFormElement = cardPopupElement.querySelector('.popup__form');//форма попапа добавления карточек

const titleInput = addFormElement.querySelector('#title-field');//поле ввода из формы попапа добавления карточек
const linkInput = addFormElement.querySelector('#link-field');//поле ввода из формы попапа добавления карточек
const addFormElementButton = addFormElement.querySelector('.popup__button');//кнопка из формы попапа добавления карточек

export const imagePopupElement = document.querySelector('.popup-image');//попап картинка
const imagePopupCloseButtonElement = imagePopupElement.querySelector('.popup__close-button');//кнопка закрытия

export function openPopup(popup) {//функция открытия
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupByEscape);
};

function closePopup(popup) {//функция закрытия
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupByEscape);
};

editPopupOpenButtonElement.addEventListener('click', function() {//открытие для попапа редактирования
  buppa1._toogleButton(editFormElement, editFormElementButton);
  nameInput.value = nameElement.textContent;
  jobInput.value = descriptionElement.textContent;
  openPopup(editPopupElement);
});

cardPopupOpenButtonElement.addEventListener('click', function() {//открытие для попапа добавления карточек
  openPopup(cardPopupElement);
  buppa._toogleButton(addFormElement, addFormElementButton);
});

editPopupCloseButtonElement.addEventListener('click', function() {//закрытие для попапа редактирования
  closePopup(editPopupElement);
});

cardPopupCloseButtonElement.addEventListener('click', function() {//закрытие для попапа редактирования
  closePopup(cardPopupElement);
});

imagePopupCloseButtonElement.addEventListener('click', function() {//закрытие для попапа картинки
  closePopup(imagePopupElement);
});

function submitEditProfileForm (evt) {//берёт знчение из попапа и вставляет в профиль
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  descriptionElement.textContent = jobInput.value;
  closePopup(editPopupElement);
};

editFormElement.addEventListener('submit', submitEditProfileForm);//навесили событие на форму попапа редактирования

function submitAddCardForm (evt) {//берёт знчение из попапа и вставляет в карточки
  evt.preventDefault();
  const cardData = {
    name: titleInput.value,
    link: linkInput.value
  };
  renderItem(cardData);
  closePopup(cardPopupElement);
  titleInput.value = '';
  linkInput.value = '';
};

addFormElement.addEventListener('submit', submitAddCardForm);//навесили событие на форму попапа добавления карточек

function  renderInitialCards() {//проходится по массиву объектов
  for (let i = 0; i < initialCards.length; i = i + 1) {
    const element = initialCards[i];
    renderItem(element);

    initialCards.forEach(renderItem);
  };
};

function renderItem(data) {//добовляет карточку в html document
  const htmlElement = new Card(data, '.item_template').createCard()
  list.prepend(htmlElement);
};         

renderInitialCards();

const closePopupByClickOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return;
  };
  const openedPopup = document.querySelector('.popup_is-opened');
  closePopup(openedPopup);
};

editPopupElement.addEventListener('click', closePopupByClickOverlay);
cardPopupElement.addEventListener('click', closePopupByClickOverlay);
imagePopupElement.addEventListener('click', closePopupByClickOverlay);

function closePopupByEscape(evt) {//закрытие открытого попапа нажатием на Escape
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  };
};

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__field_invalid',
  errorClass: 'popup__error'
};

const buppa = new FormValidator(config, addFormElement);
buppa.enableValidation();

const buppa1 = new FormValidator(config, editFormElement);
buppa1.enableValidation();