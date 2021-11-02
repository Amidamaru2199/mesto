                                       //Первый спринт ..от..
const editPopupElement = document.querySelector('.popup_type_edit');//попап для редактирования профиля
const editPopupCloseButtonElement = editPopupElement.querySelector('.popup__close-button');//кнопка для закрытия попапа редактирования профиля
const editPopupOpenButtonElement = document.querySelector('.profile__edit-button');//кнопка для открытия попапа редактирования профиля
const editFormElement = editPopupElement.querySelector('.popup__form');//форма попапа редактирования профиля
const nameInput = editFormElement.querySelector('#name-field');//поле ввода из формы попапа редактирования профиля
const jobInput = editFormElement.querySelector('#profession-field');//поле ввода из формы попапа редактирования профиля
const nameElement = document.querySelector('.profile__name');//имя из профиля
const descriptionElement = document.querySelector('.profile__description');//профессия из профиля

const openEditPopup = function() {
    nameInput.value = nameElement.textContent;
    jobInput.value = descriptionElement.textContent;
    editPopupElement.classList.add('popup_is-opened');
};

const closeEditPopup = function() {
    editPopupElement.classList.remove('popup_is-opened');
};

editPopupOpenButtonElement.addEventListener('click', openEditPopup);
editPopupCloseButtonElement.addEventListener('click', closeEditPopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    
    nameElement.textContent = nameInput.value;
    descriptionElement.textContent = jobInput.value;
    closeEditPopup ();
};

editFormElement.addEventListener('submit', formSubmitHandler);
                                         //..до..
                                        
                                        //Открытие попапа для карточек ..от..
const cardPopupElement = document.querySelector('.popup_type_card');//попап для добавления карточек
const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');//кнопка для открытия попапа добавления карточек
const cardPopupCloseButtonElement = cardPopupElement.querySelector('.popup__close-button');//кнопка для закрытия попапа добавления карточек

const openCardPopup = function() {
    cardPopupElement.classList.add('popup_is-opened');
};

const closeCardPopup = function() {
    cardPopupElement.classList.remove('popup_is-opened');
};

cardPopupOpenButtonElement.addEventListener('click', openCardPopup);
cardPopupCloseButtonElement.addEventListener('click', closeCardPopup);
                                                //до


                            //Карточки ..от..
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const list = document.querySelector('.elements');//пустая секция для карточек
const itemTemplate = document.querySelector('.item_template');//шаблон карточек
const addFormElement = cardPopupElement.querySelector('.popup__form');//форма попапа добавления карточек

const titleInput = addFormElement.querySelector('#title-field');//поле ввода из формы попапа добавления карточек
const linkInput = addFormElement.querySelector('#link-field');//поле ввода из формы попапа добавления карточек
const addFormElementButton = addFormElement.querySelector('.popup__button');//кнопка из формы попапа добавления карточек

function render() {
  for (let i = 0; i < initialCards.length; i = i + 1) {
    const element = initialCards[i];
    renderItem(element);
  };
  /*addFormElementButton.addEventListener('click', Submit);*/
};



function renderItem(element) {
  const htmlElement = itemTemplate.content.cloneNode(true);

  htmlElement.querySelector('.element__text').textContent = element.name;
  htmlElement.querySelector('.element__image').src = element.link;

  setListeners(htmlElement);
  lick(htmlElement);

  list.prepend(htmlElement);
};

                              //Удаление карточки ..от..     
function setListeners(element) {
  element.querySelector('.element__delete-button').addEventListener('click', handleDelete);
};

function handleDelete(event) {
  event.target.closest('.element').remove();
};
                                //до

                                                     //Сердечки ..от..
/*function handleLikeBtn() {
    const likeBtnsList = document.querySelectorAll(".element__vector");
  
    likeBtnsList.forEach(function(likeBtn) {
      likeBtn.addEventListener("click", function () {
        likeBtn.classList.toggle("element__vector_active");
        });
      });
    };
  
  document.addEventListener("DOMContentLoaded", function () {
    handleLikeBtn();
  });*/
                            
function lick(element) {
  element.querySelector('.element__vector').addEventListener('click', handleLicke);
};

function handleLicke(event) {
  event.target.classList.toggle('element__vector_active');
};
                                  //..до..


function Submit (evt) {
    evt.preventDefault();
    /*const myValueTitle = titleInput.value;
    const myValueLink = linkInput.value;*/
    let myObject = {
      name: titleInput.value,
      link: linkInput.value
    }
    renderItem(myObject);
    closeCardPopup();
};

addFormElement.addEventListener('submit', Submit);

render();



















const imagePopupElement = document.querySelector('.popup-image');//попап картинка
const cardElement = document.querySelector('.element');//карточка
const imagePopupOpenImgElement = cardElement.querySelector('.element__image');//картинка в карточке
const cardElementText = cardElement.querySelector('.element__text');//название карточки
const imagePopupCloseButtonElement = imagePopupElement.querySelector('.popup__close-button');//кнопка закрытия 

const openImagePopup = function() {//открывашка
  imagePopupElement.classList.add('popup_is-opened');
};

const closeImagePopup = function() {//закрывашка
  imagePopupElement.classList.remove('popup_is-opened');
};

imagePopupOpenImgElement.addEventListener('click', openImagePopup);//навесили открытие на картинку
imagePopupCloseButtonElement.addEventListener('click', closeImagePopup);//навесили закрытие на кнопку

const getAttributeSrc = imagePopupOpenImgElement.getAttribute('src');//взяли src у картинки из карточки
const imagePopupElementImg = imagePopupElement.querySelector('.popup-image__img');//нашли картинку из попапа
imagePopupElementImg.src = getAttributeSrc;//прировняли src из попапа к src из карточки

const getText = cardElementText.textContent;//взяли текст из карточки
const imagePopupElementText = imagePopupElement.querySelector('.popup-image__text');//нашли текстовый элемент из карточки
imagePopupElementText.textContent = getText;//прировняли текст из карточки к тексту попапа
