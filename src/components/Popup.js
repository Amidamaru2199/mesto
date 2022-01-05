export class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    };

    open() {//функция открытия
        this._popupSelector.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.addEventListener('click', this._handleByClickOverlay);
      };

    close() {//функция закрытия
        this._popupSelector.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.removeEventListener('click', this._handleByClickOverlay);
      };

    _handleEscClose = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
          };
      };
    
    _handleByClickOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        };
      };  

    setEventListeners() {
        const closeButton = this._popupSelector.querySelector('.popup__close-button');
        closeButton.addEventListener('click', () => {
          this.close();
        });
    };
};