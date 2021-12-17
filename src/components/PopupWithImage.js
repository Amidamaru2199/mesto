import { Popup } from "./Popup"

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
        this._imagePopupElementImg = this._popupSelector.querySelector('.popup-image__img');//нашли картинку из попапа
        this._imagePopupElementText = this._popupSelector.querySelector('.popup-image__text');//нашли текстовый элемент из карточки
    };

    open(imagePopupParams) {//функция открытия
               
        this._imagePopupElementImg.src = imagePopupParams.src;
        this._imagePopupElementText.textContent = imagePopupParams.text;
        this._imagePopupElementImg.alt = imagePopupParams.alt;   
          
        super.open();
      };
};