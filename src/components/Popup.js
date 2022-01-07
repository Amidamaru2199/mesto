export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        /*Спасибо за проверку!*/
    };

    open() {//функция открытия
        this._popupElement.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.addEventListener('click', this._handleByClickOverlay);
      };

    close() {//функция закрытия
        this._popupElement.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupElement.removeEventListener('click', this._handleByClickOverlay);
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
        const closeButton = this._popupElement.querySelector('.popup__close-button');
        closeButton.addEventListener('click', () => {
          this.close();
        });
    };
};