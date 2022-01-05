import {editPopupOpenButtonElement, editFormElement, nameInput, jobInput, cardPopupOpenButtonElement, addFormElement, config, avatarFormElement, avatar, pen} from '../components/constants.js';
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
  profilePopupWithForm.renderLoading(true)
  console.log(data)
  api.editProfile({name: data.name, about: data.profession})
  .then(profileData => {
    //console.log(profileData)
    newUserInfo.setUserInfo(data);
    profilePopupWithForm.close();
  })
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

function handleCardDelete(cardElement, cardId) {//l;kjjjj
  console.log(cardElement, cardId);
  confirmPopupWithForm.open(cardElement, cardId);
}

function createCard(item) {
  const extraData = {
    initUserLiked: checkUserLiked(item, userInfo._id),
    canRemove: equalIds(userInfo._id, item.owner._id)
  }
  const newCard = new Card(item, '.item_template', handleCardClick, hendleLikeClickHandler, extraData, handleCardDelete).generateCard();
  return newCard;
};

const avatarPopupWithForm = new PopupWithForm('.popup_type_avatar', handleFormSubmit);

avatarPopupWithForm.setEventListeners();

function handleFormSubmit(data) {
  avatarPopupWithForm.renderLoading(true)
  api.editAvatar(data)
  .then(res => {
    avatar.src = res.avatar;
    avatarPopupWithForm.close();
  })
  .catch((err) => console.log(err))
  .finally(() => avatarPopupWithForm.renderLoading(false))
}

pen.addEventListener('click', function() {
  avatarPopupWithForm.open();
  avatarFormValidator.toogleButton()
})

const confirmPopupWithForm = new PopupWithConfirmation('.popup_type_confirm', (cardElement, cardId) => {
  api.deleteCard(cardId)
  .then(() => {cardElement.remove()
    confirmPopupWithForm.close()})
})
confirmPopupWithForm.setEventListeners()

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(config, avatarFormElement);
avatarFormValidator.enableValidation();

let newSection

document.addEventListener("DOMContentLoaded", function() {
  api.getUserInfo().then(userInfoData => {
    avatar.src = userInfoData.avatar
    newUserInfo.setUserInfo({name: userInfoData.name, profession: userInfoData.about})
    userInfo = userInfoData;
  });
 
  api.getInitialCards().then(initialCards => {
    newSection = new Section({
      items: initialCards,
      renderer: function(item) {
        const card = createCard(item);
        newSection.addItem(card);
      }
    }, '.elements');

    newSection.renderItems();
  })
});

function equalIds(id1, id2) {
  return id1 === id2
};

function checkUserLiked(cardData, userId) {
  return cardData.likes.some(likedUser => likedUser._id === userId)
}

function hendleLikeClickHandler(cardData, evt, setNewData, toogleButton) {
  const userIsLiked = checkUserLiked(cardData, userInfo._id);
  if (userIsLiked) {
    api.deleteLikes(cardData._id).then(newCardData => {setNewData(newCardData)})
  } else {
    api.setLikes(cardData._id).then(newCardData => {setNewData(newCardData)})
  }
  toogleButton(evt);
}