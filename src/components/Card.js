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
        
    imagePopupOpenImgElement.addEventListener('click', () => {
      this._handleCardClick({src: this._link, text: this._name, alt: this._name});
      /*Думал уже исправил это замечание. Спасибо за работу!!!*/
    });
  };
}