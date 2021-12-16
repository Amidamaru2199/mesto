import { Popup } from "./Popup"

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector)
    };

    open(imagePopupParams) {//функция открытия
        const imagePopupElementImg = this._popupSelector.querySelector('.popup-image__img');//нашли картинку из попапа
        const imagePopupElementText = this._popupSelector.querySelector('.popup-image__text');//нашли текстовый элемент из карточки
               
        imagePopupElementImg.src = imagePopupParams.src;
        imagePopupElementText.textContent = imagePopupParams.text;
        imagePopupElementImg.alt = imagePopupParams.alt;   
          
        super.open();
      };
};