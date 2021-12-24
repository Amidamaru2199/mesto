(()=>{"use strict";var e=document.querySelector(".popup_type_edit"),t=document.querySelector(".profile__edit-button"),n=e.querySelector(".popup__form"),r=n.querySelector("#name-field"),o=n.querySelector("#profession-field"),i=document.querySelector(".popup_type_card"),u=document.querySelector(".profile__add-button"),c=i.querySelector(".popup__form"),a={formSelector:".popup__form",inputSelector:".popup__field",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_invalid",inputErrorClass:"popup__field_invalid",errorClass:"popup__error"};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._selector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"generateCard",value:function(){var e=document.querySelector(this._selector).content.cloneNode(!0),t=e.querySelector(".element__image");return e.querySelector(".element__text").textContent=this._name,t.src=this._link,t.alt=this._name,this._setListeners(e),this._setLikeListener(e),this._setImageHandler(e),e}},{key:"_setListeners",value:function(e){e.querySelector(".element__delete-button").addEventListener("click",this._handleDelete)}},{key:"_handleDelete",value:function(e){e.target.closest(".element").remove()}},{key:"_setLikeListener",value:function(e){e.querySelector(".element__vector").addEventListener("click",this._handleLikeClick)}},{key:"_handleLikeClick",value:function(e){e.target.classList.toggle("element__vector_active")}},{key:"_setImageHandler",value:function(e){var t=this;e.querySelector(".element").querySelector(".element__image").addEventListener("click",(function(){t._handleCardClick({src:t._link,text:t._name,alt:t._name})}))}}])&&l(t.prototype,n),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._submitButton=this._form.querySelector(".popup__button")}var t,n;return t=e,(n=[{key:"enableValidation",value:function(){this._addListenersToForm(this._form)}},{key:"_addListenersToForm",value:function(e){var t=this,n=Array.from(this._form.querySelectorAll(this._inputSelector)),r=e.querySelector(this._submitButtonSelector);n.forEach((function(e){t._addListenersToInput(e,t._form,r)}))}},{key:"_addListenersToInput",value:function(e,t,n){var r=this;e.addEventListener("input",(function(e){r._handleFieldValidation(e),r.toogleButton(r._form,n)}))}},{key:"toogleButton",value:function(){var e=!this._form.checkValidity();this._submitButton.disabled=e,this._submitButton.classList.toggle(this._inactiveButtonClass,e)}},{key:"_handleFieldValidation",value:function(e){var t=e.target,n=this._form.querySelector(".".concat(t.id,"-error"));t.validity.valid?t.classList.remove(this._inputErrorClass):t.classList.add(this._inputErrorClass),n.textContent=t.validationMessage}}])&&p(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._rendeneredItems=r,this._renderer=o,this._containerSelector=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._containerSelector.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._rendeneredItems.forEach((function(t){e._renderer(t)}))}}])&&y(t.prototype,n),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),h(this,"_handleByClickOverlay",(function(e){e.target===e.currentTarget&&n.close()})),this._popupSelector=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popupSelector.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose),this._popupSelector.addEventListener("click",this._handleByClickOverlay)}},{key:"close",value:function(){this._popupSelector.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose),this._popupSelector.removeEventListener("click",this._handleByClickOverlay)}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()}))}}])&&_(t.prototype,n),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._imagePopupElementImg=t._popupSelector.querySelector(".popup-image__img"),t._imagePopupElementText=t._popupSelector.querySelector(".popup-image__text"),t}return t=u,(n=[{key:"open",value:function(e){this._imagePopupElementImg.src=e.src,this._imagePopupElementText.textContent=e.text,this._imagePopupElementImg.alt=e.alt,g(E(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),u}(m);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},j.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function P(e,t){return P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},P(e,t)}function x(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=t,n._form=n._popupSelector.querySelector(".popup__form"),n._inputs=Array.from(n._popupSelector.querySelectorAll(".popup__field")),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"_handleSubmit",value:function(e){e.preventDefault(),this._submit(this._getInputValues())}},{key:"setEventListeners",value:function(){var e=this;j(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){e._handleSubmit(t)}))}},{key:"close",value:function(){j(B(u.prototype),"close",this).call(this),this._form.reset()}}])&&L(t.prototype,n),u}(m);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){var n=t.name,r=t.profession;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._profession=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,profession:this._profession.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._profession.textContent=e.profession}}])&&R(t.prototype,n),e}(),V=new C(".popup-image");V.setEventListeners();var D=new T({name:".profile__name",profession:".profile__description"});t.addEventListener("click",(function(){N.toogleButton();var e=D.getUserInfo();r.value=e.name,o.value=e.profession,A.open()})),u.addEventListener("click",(function(){F.open(),M.toogleButton()}));var A=new I(".popup_type_edit",(function(e){D.setUserInfo(e),A.close()}));A.setEventListeners();var F=new I(".popup_type_card",(function(e){var t=H(e);z.addItem(t),F.close()}));function U(e){var t=e.src,n=e.text,r=e.alt;V.open({src:t,text:n,alt:r})}function H(e){return new s(e,".item_template",U).generateCard()}F.setEventListeners();var z=new d({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var t=H(e);z.addItem(t)}},".elements");z.renderItems();var M=new f(a,c);M.enableValidation();var N=new f(a,n);N.enableValidation()})();