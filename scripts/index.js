                                       
const editPopupElement = document.querySelector('.popup_type_edit');//попап для редактирования профиля
const editPopupCloseButtonElement = editPopupElement.querySelector('.popup__close-button');//кнопка для закрытия попапа редактирования профиля
const editPopupOpenButtonElement = document.querySelector('.profile__edit-button');//кнопка для открытия попапа редактирования профиля
const editFormElement = editPopupElement.querySelector('.popup__form');//форма попапа редактирования профиля
const nameInput = editFormElement.querySelector('#name-field');//поле ввода из формы попапа редактирования профиля
const jobInput = editFormElement.querySelector('#profession-field');//поле ввода из формы попапа редактирования профиля
const nameElement = document.querySelector('.profile__name');//имя из профиля
const descriptionElement = document.querySelector('.profile__description');//профессия из профиля


const cardPopupElement = document.querySelector('.popup_type_card');//попап для добавления карточек
const cardPopupOpenButtonElement = document.querySelector('.profile__add-button');//кнопка для открытия попапа добавления карточек
const cardPopupCloseButtonElement = cardPopupElement.querySelector('.popup__close-button');//кнопка для закрытия попапа добавления карточек

const list = document.querySelector('.elements');//пустая секция для карточек
const itemTemplate = document.querySelector('.item_template');//шаблон карточек
const addFormElement = cardPopupElement.querySelector('.popup__form');//форма попапа добавления карточек

const titleInput = addFormElement.querySelector('#title-field');//поле ввода из формы попапа добавления карточек
const linkInput = addFormElement.querySelector('#link-field');//поле ввода из формы попапа добавления карточек
const addFormElementButton = addFormElement.querySelector('.popup__button');//кнопка из формы попапа добавления карточек


const imagePopupElement = document.querySelector('.popup-image');//попап картинка
const imagePopupCloseButtonElement = imagePopupElement.querySelector('.popup__close-button');//кнопка закрытия


const initialCards = [//массив карточек
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



function openPopup(popup) {//функция открытия
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupByEscape);
};

function closePopup(popup) {//функция закрытия
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupByEscape);
};



editPopupOpenButtonElement.addEventListener('click', function() {//открытие для попапа редактирования
  nameInput.value = nameElement.textContent;
  jobInput.value = descriptionElement.textContent;
  openPopup(editPopupElement);
});

cardPopupOpenButtonElement.addEventListener('click', function() {//открытие для попапа добавления карточек
  openPopup(cardPopupElement);
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



function  renderInitialCards() {
  for (let i = 0; i < initialCards.length; i = i + 1) {
    const element = initialCards[i];
    renderItem(element);
  };
};



function renderItem(element) {
  const htmlElement = createCard(element)
  list.prepend(htmlElement);
};


function createCard(element) {
  const htmlElement = itemTemplate.content.cloneNode(true);
  const htmlElementImage = htmlElement.querySelector('.element__image')
  htmlElement.querySelector('.element__text').textContent = element.name;
  htmlElementImage.src = element.link;
  htmlElementImage.alt = element.name;
  /*htmlElement.querySelector('.element__image').src = element.link;
  htmlElement.querySelector('.element__image').alt = element.name;*/

  setListeners(htmlElement);
  setLikeListener(htmlElement);
  setImageHandler(htmlElement);
  return htmlElement;
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
function setLikeListener(element) {
  element.querySelector('.element__vector').addEventListener('click', handleLikeClick);
};

function handleLikeClick(event) {
  event.target.classList.toggle('element__vector_active');
};
                                                      //..до..

const imagePopupElementImg = imagePopupElement.querySelector('.popup-image__img');//нашли картинку из попапа
const imagePopupElementText = imagePopupElement.querySelector('.popup-image__text');//нашли текстовый элемент из карточки

  function setImageHandler(cardTemplate) {
    const cardElement = cardTemplate.querySelector('.element');//карточка
    const imagePopupOpenImgElement = cardElement.querySelector('.element__image');//картинка в карточке
    const cardElementText = cardElement.querySelector('.element__text');//название карточки
  
  imagePopupOpenImgElement.addEventListener('click', function() {
    imagePopupElementImg.src = imagePopupOpenImgElement.getAttribute('src');//взяли src у картинки из карточки
    imagePopupElementText.textContent = cardElementText.textContent;//взяли текст из карточки
    imagePopupElementImg.alt =  imagePopupOpenImgElement.getAttribute('alt');
    openPopup(imagePopupElement);
  });


  /*const getAttributeSrc = imagePopupOpenImgElement.getAttribute('src');//взяли src у картинки из карточки
  //const imagePopupElementImg = imagePopupElement.querySelector('.popup-image__img');//нашли картинку из попапа

  const getAttributeAlt = imagePopupOpenImgElement.getAttribute('alt');

  const getText = cardElementText.textContent;//взяли текст из карточки
  //const imagePopupElementText = imagePopupElement.querySelector('.popup-image__text');//нашли текстовый элемент из карточки*/
};

renderInitialCards();

const closeEditPopupByClickOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return;
  };
  closePopup(editPopupElement);
};

const closeAddPopupByClickOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return;
  };
  closePopup(cardPopupElement);
};

const closeImagePopupByClickOverlay = function(event) {
  if (event.target !== event.currentTarget) {
    return;
  };
  closePopup(imagePopupElement);
};

editPopupElement.addEventListener('click', closeEditPopupByClickOverlay);
cardPopupElement.addEventListener('click', closeAddPopupByClickOverlay);
imagePopupElement.addEventListener('click', closeImagePopupByClickOverlay);



const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error'
};


function enableValidation() {
  const forms = Array.from(document.querySelectorAll('.popup__form'));
  
  forms.forEach(addListenersToForm);
};

enableValidation();

function addListenersToForm(form) {
  const inputs = Array.from(document.querySelectorAll('.popup__field'));

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
  const button = form.querySelector('.popup__button');
  const isFormInvalid = !form.checkValidity();
  
  button.disabled = isFormInvalid;
  button.classList.toggle('popup__button_invalid', isFormInvalid);
};

function addListenersToInput(input) {
  input.addEventListener('input', handleFieldValidation);
};

function handleFieldValidation(evt) {
  const element = evt.target
  const errorContainer = document.querySelector(`#${element.id}-error`);
  if (!element.validity.valid) {
    element.classList.add('popup__field_invalid');
  } else {
    element.classList.remove('popup__field_invalid');
  }
  errorContainer.textContent = element.validationMessage;
};











function closePopupByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  };
};

//document.addEventListener('keydown', closePopupByEscape);