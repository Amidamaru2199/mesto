const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const openPopup = function() {
    popupElement.classList.add('popup_is-opened');
};

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened');
};

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
















// Находим форму в DOM
const formElement = document.querySelector('.popup__form'); // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__field-name'); // Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector('.popup__field-profession');// Воспользуйтесь инструментом .querySelector()

const nameElement = document.querySelector('.profile__name');
const descriptionElement = document.querySelector('.profile__description');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    
    // Выберите элементы, куда должны быть вставлены значения полей
nameElement.textContent = nameInput.value;
descriptionElement.textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent

}

formElement.addEventListener('submit', formSubmitHandler);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


const popupAddEndCloseButton = document.querySelector('.popup__button');
popupAddEndCloseButton.addEventListener('click', closePopup);




















/*const vectorElement = document.querySelector('.element__vector');

const toggleVector = function() {
    vectorElement.classList.toggle('element__vector_active');
};

vectorElement.addEventListener('click', toggleVector);*/