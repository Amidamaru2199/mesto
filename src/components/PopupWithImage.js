import { Popup } from "./Popup"

export class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup)
        this._imagePopupElementImg = this._popupElement.querySelector('.popup-image__img');//нашли картинку из попапа
        this._imagePopupElementText = this._popupElement.querySelector('.popup-image__text');//нашли текстовый элемент из карточки
    };

    open(imagePopupParams) {//функция открытия
               
        this._imagePopupElementImg.src = imagePopupParams.src;
        this._imagePopupElementText.textContent = imagePopupParams.text;
        this._imagePopupElementImg.alt = imagePopupParams.alt;   
          
        super.open();
      };
};