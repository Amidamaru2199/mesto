export class Card {
    constructor(data, selector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
    }

    generateCard() {//создает карточку
        const htmlElement = document.querySelector(this._selector).content.cloneNode(true);
        const htmlElementImage = htmlElement.querySelector('.element__image')
        htmlElement.querySelector('.element__text').textContent = this._name;
        htmlElementImage.src = this._link;
        htmlElementImage.alt = this._name;

        this._setListeners(htmlElement);
        this._setLikeListener(htmlElement);
        this._setImageHandler(htmlElement);
        return htmlElement
    }
                                                           //Удаление карточки ..от.. 
    _setListeners(element) {
      element.querySelector('.element__delete-button').addEventListener('click', this._handleDelete);
    };
    
    _handleDelete(event) {
      event.target.closest('.element').remove();
    };
                                                              //до
                                                              //Сердечки ..от.. 
    _setLikeListener(element) {
      element.querySelector('.element__vector').addEventListener('click', this._handleLikeClick);
    };
    
    _handleLikeClick(event) {
      event.target.classList.toggle('element__vector_active');
    };

    _setImageHandler(cardTemplate) {
      const cardElement = cardTemplate.querySelector('.element');//карточка
      const imagePopupOpenImgElement = cardElement.querySelector('.element__image');//картинка в карточке
      const cardElementText = cardElement.querySelector('.element__text');//название карточки
        
    imagePopupOpenImgElement.addEventListener('click', () => {
      const src = imagePopupOpenImgElement.getAttribute('src');//взяли src у картинки из карточки
      const text = cardElementText.textContent;//взяли текст из карточки
      const alt =  imagePopupOpenImgElement.getAttribute('alt');
      this._handleCardClick({src, text, alt})
    });
  };
}