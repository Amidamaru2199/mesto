export class Section {
    constructor({renderer}, containerSelector) {
        this._renderer = renderer;
        this._containerSelector = document.querySelector(containerSelector);
    };

    addItem(element) {
        this._containerSelector.prepend(element);
    };

    addItem1(element) {
        this._containerSelector.append(element);
    };

    renderItems(items) {//проходится по массиву объектов
        items.forEach((item) => {
            this._renderer(item); 
        });
    };
};