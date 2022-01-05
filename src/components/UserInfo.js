export class UserInfo {
    constructor({name, profession}) {
        this._name = document.querySelector(name);
        this._profession = document.querySelector(profession);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            profession: this._profession.textContent
        };
    }

    setUserInfo(userData) {
        this._name.textContent = userData.name;
        this._profession.textContent = userData.profession;
    }
} 