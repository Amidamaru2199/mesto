import { Popup } from "./Popup";

export class PopupWithForm extends Popup{
    constructor(popupSelector, submit) {
        super(popupSelector);
        this._submit = submit;
        this._form = this._popupSelector.querySelector('.popup__form');
        this._inputs = Array.from(this._popupSelector.querySelectorAll('.popup__field'));        
    };

    _getInputValues() {
        const data = {};
        this._inputs.forEach((input) => {
            data[input.name] = input.value;
        });
        return data;
    };
    
    _handleSubmit(evt) {
        evt.preventDefault();
        this._submit(this._getInputValues());
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {this._handleSubmit(evt)});
    };

    close() {
        super.close();
        this._form.reset();
    }
};