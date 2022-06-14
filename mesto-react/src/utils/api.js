
const cohortId = 'cohort-40';
const token = '69ca4822-f2c1-499e-b251-d797f176bceb';

const api = {
  url: 'mesto.nomoreparties.co',
  protocol: 'https://',
  version: 'v1',
};

class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _handleFetch = res =>
    res.ok
      ? res.json()
      : Promise.reject(`Ошибка: ${res.status}`);

  _customFetch(target, method, body) {
    const options = {
      headers: this._headers
    };

    if (method && (method !== 'GET')) {
      options.method = method;
      if (method !== 'DELETE') {
        options.headers['Content-Type'] = 'application/json';
      }
    }

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(`${this._baseUrl}/${target}`, options)
      .then(this._handleFetch);
  }

  getUserInfo() {
    return this._customFetch('users/me');
  }

  getInitialCards() {
    return this._customFetch('cards');
  }




}

export default new Api({
  baseUrl: `${api.protocol}${api.url}/${api.version}/${cohortId}`,
  headers: {
    authorization: token
  }
}); 