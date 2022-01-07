export class UserInfo {
    constructor({name, profession, avatar}) {
        this._name = document.querySelector(name);
        this._profession = document.querySelector(profession);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo() {
        return {
            name: this._name.textContent,
            profession: this._profession.textContent,
            avatar: this._avatar.src
        };
    }

    setUserInfo(userData) {
        this._name.textContent = userData.name;
        this._profession.textContent = userData.profession;
    }

    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }
} 