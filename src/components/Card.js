export class Card {
  constructor(data, selector, handleCardClick, handleLikeClick, userInfo, handleCardDelete) {
      this._data = data;
      this._name = data.name;
      this._userInfo = userInfo;
      this._link = data.link;
      this._selector = selector;
      this._handleCardClick = handleCardClick;
      this._handleLikeClick = handleLikeClick;
      this._handleCardDelete = handleCardDelete;
      this._cardId = this._data._id;
      this._htmlElement = document.querySelector(this._selector).content.cloneNode(true);
      this._htmlElementImage = this._htmlElement.querySelector('.element__image');
      this._htmlElementText = this._htmlElement.querySelector('.element__text');
      this._htmlElementDeleteButton = this._htmlElement.querySelector('.element__delete-button');
      this._htmlElementLikeButton = this._htmlElement.querySelector('.element__vector');
      this._imagePopupOpenImgElement = this._htmlElement.querySelector('.element__image');
      this._cardElement = this._htmlElement.querySelector('.element');
      this._initUserLiked = this.checkUserLiked();
      this._canRemove = userInfo._id === this._data.owner._id;
      this._likeCounter = this._htmlElement.querySelector('.element__likes');
  }

  generateCard() {//создает карточку
      this._htmlElementText.textContent = this._name;
      this._htmlElementImage.src = this._link;
      this._htmlElementImage.alt = this._name;

      if (!this._canRemove) {
        
        this._htmlElementDeleteButton.remove();
      }

      if (this._initUserLiked) {
        
        this._htmlElementLikeButton.classList.add('element__vector_active');
      }

      this._setListeners();
      
      this._setLikeListener();
      
      this._setImageHandler();

      this.updateLikesInfo();
      
      return this._htmlElement
  }
                                                         //Удаление карточки ..от.. 
  _setListeners() {
    
    if (this._htmlElementDeleteButton) {
      this._htmlElementDeleteButton.addEventListener('click', (evt) => this._handleDelete(evt));
    }
  };

  updateLikesInfo() {
    this._likeCounter.textContent = this._data.likes.length
  }
  
  _handleDelete() {
    this._handleCardDelete(this._cardId, this);
  };
                                                            
  _setLikeListener() {
    this._htmlElement.querySelector('.element__vector').addEventListener('click', () => {
  
      this._handleLikeClick(this._data, this)
    });
  };

  setNewData(newData) {
    this._data = newData;
  }
  
  toggleLike() {
    this._htmlElementLikeButton.classList.toggle('element__vector_active');
  };

  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setImageHandler() { 
    this._imagePopupOpenImgElement.addEventListener('click', () => {
    this._handleCardClick({src: this._link, text: this._name, alt: this._name});
  });
};

checkUserLiked() {
  return this._data.likes.some(likedUser => likedUser._id === this._userInfo._id)
}
}