import {editPopupOpenButtonElement, editFormElement, nameInput, jobInput, cardPopupOpenButtonElement, addFormElement, config, avatarFormElement, avatarPopupOpenButtonElement} from '../components/utils.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import './index.css'; // добавьте импорт главного файла стилей
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';

let userInfo

export const newPopupWithImage = new PopupWithImage('.popup-image');
newPopupWithImage.setEventListeners();

const newUserInfo = new UserInfo({name: '.profile__name', profession: '.profile__description', avatar: '.profile__image'})

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
  profilePopupWithForm.renderLoading(true)
  api.editProfile({name: data.name, about: data.profession})
  .then(profileData => {
    newUserInfo.setUserInfo({name: profileData.name, profession: profileData.about});
    profilePopupWithForm.close();
  })
  .catch((err) => console.log(err))
  .finally(() => profilePopupWithForm.renderLoading(false));
  };

const сardPopupWithForm = new PopupWithForm('.popup_type_card', submitAddCardForm);

сardPopupWithForm.setEventListeners()

function submitAddCardForm (data) {//берёт знчение из попапа и вставляет в карточки
  сardPopupWithForm.renderLoading(true)
  api.createCard(data)
  .then(cardData => {
    const card = createCard(cardData);
    newSection.addItem(card);
    сardPopupWithForm.close();
  })
  .catch((err) => console.log(err))
  .finally(() => сardPopupWithForm.renderLoading(false))
};

function handleCardClick({src, text, alt}) {
  newPopupWithImage.open({src, text, alt});
};

function handleCardDelete(cardId, cardThis) {//l;kjjjj
  
  confirmPopupWithForm.open(cardId, cardThis);
}

function createCard(item) {
  const newCard = new Card(item, '.item_template', handleCardClick, hendleLikeClick, userInfo, handleCardDelete).generateCard();
  return newCard;
};

const avatarPopupWithForm = new PopupWithForm('.popup_type_avatar', handleFormSubmit);

avatarPopupWithForm.setEventListeners();

function handleFormSubmit(data) {
  avatarPopupWithForm.renderLoading(true)
  api.editAvatar(data)
  .then(res => {
    newUserInfo.setUserAvatar(res.avatar)
    avatarPopupWithForm.close();
  })
  .catch((err) => console.log(err))
  .finally(() => avatarPopupWithForm.renderLoading(false))
}

avatarPopupOpenButtonElement.addEventListener('click', function() {
  avatarPopupWithForm.open();
  avatarFormValidator.toogleButton()
})

const confirmPopupWithForm = new PopupWithConfirmation('.popup_type_confirm', (cardId, cardThis) => {
  api.deleteCard(cardId)
  .then(() => {cardThis.removeCard()
    confirmPopupWithForm.close()
  })
  .catch((err) => console.log(err))
})
confirmPopupWithForm.setEventListeners()

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(config, avatarFormElement);
avatarFormValidator.enableValidation();

const newSection = new Section({
  renderer: function(item) {
    const card = createCard(item);
    newSection.addItem1(card);
  }
}, '.elements');

document.addEventListener("DOMContentLoaded", function() {
  Promise.all([     
    api.getUserInfo(),
    api.getInitialCards()
  ])
    .then(([userInfoData, initialCards])=>{
      newUserInfo.setUserAvatar(userInfoData.avatar);
      newUserInfo.setUserInfo({name: userInfoData.name, profession: userInfoData.about})
      userInfo = userInfoData;
      newSection.renderItems(initialCards);
    })
    .catch((err)=>{
      console.log(err);
    }) 
});

function hendleLikeClick(cardData, cardThis) {
  const userIsLiked = cardThis.checkUserLiked()
  if (userIsLiked) {
    api.deleteLikes(cardData._id)
    .then(newCardData => {cardThis.setNewData(newCardData)
      cardThis.toggleLike()
      cardThis.updateLikesInfo()
    })
    .catch((err) => console.log(err))
  } else {
    api.setLikes(cardData._id)
    .then(newCardData => {cardThis.setNewData(newCardData)
      cardThis.toggleLike()
      cardThis.updateLikesInfo()
    })
    .catch((err) => console.log(err))
  }
}