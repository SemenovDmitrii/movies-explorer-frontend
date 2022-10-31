export class MainApi {
  constructor(config) {
    this._baseUrl = config.baseUrl;
    this._headers = config.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  patchUser({ name, email }, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._checkResponse);
  }

  getSaveMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }).then(this._checkResponse);
  }

  postMovies(movie, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: movie.country ? movie.country : "Страна не указана",
        director: movie.director ? movie.director : "Режиссер не указан",
        duration: movie.duration,
        year: movie.year ? movie.year : "Год не указан",
        description: movie.description
          ? movie.description
          : "Описание не указано",
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink ? movie.trailerLink : "Трейлера нет",
        nameRU: movie.nameRU ? movie.nameRU : "Название не указано",
        nameEN: movie.nameEN ? movie.nameEN : "Назввание не указано",
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        owner: movie.owner,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(id, token) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }).then(this._checkResponse);
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.sdv.nomoredomains.icu",
  headers: {
    "content-type": "application/json"
  }
});
