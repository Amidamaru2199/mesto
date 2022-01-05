import { Popup } from "./Popup";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, hendleDeleteCard) {
        super(popupSelector);
        this._hendleDeleteCard = hendleDeleteCard;
        this._form = this._popupSelector.querySelector('.popup__form');
    }
    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {this._handleSubmit(evt)});
    }

    _handleSubmit(evt) {
        evt.preventDefault();
        this._hendleDeleteCard( this._card, this._id);
    };

    open(card, id) {
        super.open();
        this._card = card;
        this._id = id;
    }
}