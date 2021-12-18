import {editPopupOpenButtonElement, editFormElement, nameInput, jobInput, cardPopupOpenButtonElement, addFormElement, config} from '../components/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/initialCards.js';
import './index.css'; // добавьте импорт главного файла стилей
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

export const newPopupWithImage = new PopupWithImage('.popup-image');
newPopupWithImage.setEventListeners();

const newUserInfo = new UserInfo({name: '.profile__name', profession: '.profile__description'})

editPopupOpenButtonElement.addEventListener('click', function() {//открытие для попапа редактирования
  editFormValidator.toogleButton();
  const userInfo = newUserInfo.getUserInfo()
  nameInput.value = userInfo.name;
  jobInput.value = userInfo.profession;
  profilePopupWithForm.open();
});

cardPopupOpenButtonElement.addEventListener('click', function() {//открытие для попапа добавления карточек
  сardPopupWithForm.open();
  addFormValidator.toogleButton();
});

const profilePopupWithForm = new PopupWithForm('.popup_type_edit', submitEditProfileForm);

profilePopupWithForm.setEventListeners()

function submitEditProfileForm (data) {//берёт знчение из попапа и вставляет в профиль
  newUserInfo.setUserInfo(data)
  profilePopupWithForm.close();
};

const сardPopupWithForm = new PopupWithForm('.popup_type_card', submitAddCardForm);

сardPopupWithForm.setEventListeners()

function submitAddCardForm (data) {//берёт знчение из попапа и вставляет в карточки
  const card = createCard(data);
  newSection.addItem(card);
  сardPopupWithForm.close();
};

function handleCardClick({src, text, alt}) {
  newPopupWithImage.open({src, text, alt});
};

function createCard(item) {
  const newCard = new Card(item, '.item_template', handleCardClick).generateCard();
  return newCard;
};

const newSection = new Section({
  items: initialCards,
  renderer: function(item) {
    const card = createCard(item);
    newSection.addItem(card);
  }
}, '.elements');

newSection.renderItems();

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();