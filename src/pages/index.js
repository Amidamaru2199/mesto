import {editPopupOpenButtonElement, editFormElement, nameInput, jobInput, cardPopupOpenButtonElement, addFormElement, config} from '../components/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../components/initialCards.js';
import './index.css'; // добавьте импорт главного файла стилей
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';

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
  api.editProfile({name: data.name, about: data.profession}).then(profileData => {
    newUserInfo.setUserInfo(data);
  });
  profilePopupWithForm.close();
};

const сardPopupWithForm = new PopupWithForm('.popup_type_card', submitAddCardForm);

сardPopupWithForm.setEventListeners()

function submitAddCardForm (data) {//берёт знчение из попапа и вставляет в карточки
  api.createCard(data).then(cardData => {
    const card = createCard(cardData);
    newSection.addItem(card);
  })
  /*const card = createCard(data);
  newSection.addItem(card);*/
  сardPopupWithForm.close();
};

function handleCardClick({src, text, alt}) {
  newPopupWithImage.open({src, text, alt});
};

function createCard(item) {
  const extraData = {
    initUserLiked: checkUserLiked(item, userInfo._id),
    canRemove: equalIds(userInfo._id, item.owner._id)
  }
  const newCard = new Card(item, '.item_template', handleCardClick, hendleLikeClickHandler, extraData).generateCard();
  return newCard;
};

/*const newSection = new Section({
  items: initialCards,
  renderer: function(item) {
    const card = createCard(item);
    newSection.addItem(card);
  }
}, '.elements');*/

//newSection.renderItems();

const addFormValidator = new FormValidator(config, addFormElement);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(config, editFormElement);
editFormValidator.enableValidation();

let newSection

document.addEventListener("DOMContentLoaded", function() {
  api.getUserInfo().then(userInfoData => {
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

/*const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: '08f9f164-aeb4-4a4d-a2a1-640ddc7d6c20',
    'Content-Type': 'application/json'
  }
});

api.getUserInfo().then(userInfo => {
  console.log(userInfo)
})

api.getInitialCards().then(cards => {
  console.log(cards)
})

api.editProfile({name: 'kkk', about: 'ooo'}).then(cards => {
  console.log(cards)
})

api.createCard({name: 'kkk', link: 'http:fk'}).then(cards => {
  console.log(cards)
})*/