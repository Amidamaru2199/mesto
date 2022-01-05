export class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }


      getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          headers: this._headers                    
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
      };

      getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers                    
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
        
              // если ошибка, отклоняем промис
              return Promise.reject(`Ошибка: ${res.status}`);
            });
      }

      editProfile(profileData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileData.name,
                about: profileData.about
              })                  
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
        
              // если ошибка, отклоняем промис
              return Promise.reject(`Ошибка: ${res.status}`);
            });
      }

      createCard(cardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: cardData.name,
                link: cardData.link
              })                  
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
        
              // если ошибка, отклоняем промис
              return Promise.reject(`Ошибка: ${res.status}`);
            });
      }

      deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,             
          })
            .then(res => {
              if (res.ok) {
                return res.json();
              }
        
              // если ошибка, отклоняем промис
              return Promise.reject(`Ошибка: ${res.status}`);
            });
      }

      setLikes(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'PUT',
          headers: this._headers,             
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
      }

      deleteLikes(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
          method: 'DELETE',
          headers: this._headers,             
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
      }

      editAvatar(avatar) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
          method: 'PATCH',
          headers: this._headers,
          body: JSON.stringify({
              avatar: avatar.image
            })                  
        })
          .then(res => {
            if (res.ok) {
              return res.json();
            }
      
            // если ошибка, отклоняем промис
            return Promise.reject(`Ошибка: ${res.status}`);
          });
      }
};

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-33',
  headers: {
    authorization: '08f9f164-aeb4-4a4d-a2a1-640ddc7d6c20',
    'Content-Type': 'application/json'
  }
});

