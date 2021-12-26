import { api } from "./Api";

export class Card {
    constructor(data, selector, handleCardClick, handleLikeClick, extraData) {
        this._extraData = extraData;
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        console.log(data)
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
    }

    generateCard() {//создает карточку
        const htmlElement = document.querySelector(this._selector).content.cloneNode(true);
        const htmlElementImage = htmlElement.querySelector('.element__image')
        htmlElement.querySelector('.element__text').textContent = this._name;
        htmlElementImage.src = this._link;
        htmlElementImage.alt = this._name;

        if (!this._extraData.canRemove) {
          htmlElement.querySelector('.element__delete-button').remove()
        }

        if (this._extraData.initUserLiked) {
          htmlElement.querySelector('.element__vector').classList.add('element__vector_active');
        }

        this._setListeners(htmlElement);
        this._setLikeListener(htmlElement);
        this._setImageHandler(htmlElement);
        return htmlElement
    }
                                                           //Удаление карточки ..от.. 
    _setListeners(element) {
      const deleteButton = element.querySelector('.element__delete-button');
      if (deleteButton) {
        deleteButton.addEventListener('click', this._handleDelete);
      }
    };
    
    _handleDelete(event) {
      event.target.closest('.element').remove();
    };
                                                              //до
                                                              //Сердечки ..от.. 
    _setLikeListener(element) {
      element.querySelector('.element__vector').addEventListener('click', (evt) => {
        //this._handleLikeClick(evt)
        this._handleLikeClick(this._data, evt, this._setNewData.bind(this), this._handleLikeClick2)
      });
    };

    _setNewData(newData) {
      this._data = newData;
    }
    
    _handleLikeClick2(event) {
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