export class Section {
    constructor({items, renderer}, containerSelector) {
        this._rendeneredItems = items;
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    };

    addItem(element) {
        this._containerSelector.prepend(element);
    };

    renderItems() {//проходится по массиву объектов
        this._rendeneredItems.forEach((item) => {
            this._renderer(item); 
        });
    };
};