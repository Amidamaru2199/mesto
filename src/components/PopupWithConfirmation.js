import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, hendleDeleteCard) {
        super(popupSelector);
        this._hendleDeleteCard = hendleDeleteCard;
        this._form = this._popupElement.querySelector('.popup__form');
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {this._handleSubmit(evt)});
    }

    _handleSubmit(evt) {
        evt.preventDefault();
        this._hendleDeleteCard(this._id, this._cardThis);
    };

    open(id, cardThis) {
        super.open();
        this._id = id;
        this._cardThis = cardThis;
    }
}