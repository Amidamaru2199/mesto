import { api } from "./Api";

export class Card {
    constructor(data, selector, handleCardClick, handleLikeClick, extraData, handleCardDelete) {
        this._extraData = extraData;
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._selector = selector;
        this._handleCardClick = handleCardClick;
        this._handleLikeClick = handleLikeClick;
        this._handleCardDelete = handleCardDelete;
    }

    generateCard() {//создает карточку
        const htmlElement = document.querySelector(this._selector).content.cloneNode(true);
        const htmlElementImage = htmlElement.querySelector('.element__image');
        htmlElement.querySelector('.element__text').textContent = this._name;
        htmlElementImage.src = this._link;
        htmlElementImage.alt = this._name;

        htmlElementImage.setAttribute('data-id', this._data._id);


        if (!this._extraData.canRemove) {
          htmlElement.querySelector('.element__delete-button').remove()
        }

        if (this._extraData.initUserLiked) {
          htmlElement.querySelector('.element__vector').classList.add('element__vector_active');
        }

        this._setListeners(htmlElement);
        
        this._setLikeListener(htmlElement);
        
        this._setImageHandler(htmlElement);

        this._ppooiiuu(htmlElement);
        
        return htmlElement
    }
                                                           //Удаление карточки ..от.. 
    _setListeners(element) {
      const deleteButton = element.querySelector('.element__delete-button');
      if (deleteButton) {
        deleteButton.addEventListener('click', (evt) => this._handleDelete(evt));
      }
    };

    _ppooiiuu(element) {
        const likesList = element.querySelector(".element__likes");
        const incrementBtn = element.querySelector(".element__vector");
        let counterValue = likesList.textContent = this._data.likes.length;
        function increment() {
          if (!incrementBtn.classList.contains('element__vector_active')) {
            counterValue -= 1;
          likesList.innerText = counterValue;
          }else {
            counterValue += 1;
          likesList.innerText = counterValue;
          }
        }
        likesList.innerText = counterValue;
        incrementBtn.addEventListener("click", increment);
    };
    
    _handleDelete(event) {
      const cardElement = event.target.closest('.element');
      const cardId = cardElement.querySelector('img').getAttribute('data-id');

      this._handleCardDelete(cardElement, cardId);
      //event.target.closest('.element').remove();
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
    });
  };
}