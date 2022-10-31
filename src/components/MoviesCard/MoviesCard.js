import "./MoviesCard.css";
import { durationFormat } from "../../utils/durationFormat";
import { mainApi } from "../../utils/MainApi";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import Token from "../../utils/Token";

function MoviesCard({ movie }) {
  const baseURL = "https://api.nomoreparties.co";
  const [savedMovieId, setSavedMovieId] = useState(movie?._id);
  const location = useLocation();
  const { savedMoviesContext, allMoviesContext } = useContext(AppContext);
  const isSavedMoviesPage = location.pathname === "/saved-movies";

  const moviesPageButton = !!savedMovieId ? (
    <button
      type="button"
      className="movies-card__button movies-card__button_saved"
      onClick={handleClickButton}
    ></button>
  ) : (
    <button
      type="button"
      className="movies-card__button movies-card__button_type_save"
      onClick={handleClickButton}
    >
    </button>
  );

  function handleSaveMovie() {
    const token = Token.get();
    mainApi.postMovies(movie, token).then((saveMovie) => {
      setSavedMovieId(saveMovie._id);
      changeAllMovies(movie.id, "add", saveMovie._id);
    });
  }

  function handleDeleteMovie() {
    const token = Token.get();
    mainApi.deleteMovie(savedMovieId, token).then(() => {
      const { setSavedMovies, savedMovies } = savedMoviesContext;
      setSavedMovieId("");
      if (isSavedMoviesPage) {
        setSavedMovies(
          savedMovies.filter((movie) => movie._id !== savedMovieId)
        );
      }
      changeAllMovies(savedMovieId, "delete");
    });
  }

  function handleClickButton() {
    !!savedMovieId ? handleDeleteMovie() : handleSaveMovie();
  }

  function changeAllMovies(id, type, newId) {
    const { setAllMovies, allMovies } = allMoviesContext;

    if (type === "delete") {
      setAllMovies(
        allMovies.map((movie) => {
          if (movie._id === id) {
            movie._id = null;
          }
          return movie;
        })
      );
    }

    if (type === "add") {
      setAllMovies(
        allMovies.map((movie) => {
          if (movie.id === id) {
            movie._id = newId;
          }

          return movie;
        })
      );
    }
  }

  return (
    <li className="movies-card">
      <a
        className="movies-card__link"
        href={movie.trailerLink}
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="movies-card__image"
          src={movie.image.url ? `${baseURL}/${movie.image.url}` : movie.image}
          alt={movie.nameRU}
        />
      </a>
      {isSavedMoviesPage ? (
        <button
          type="button"
          className="movies-card__button movies-card__button_type_remove"
          onClick={handleClickButton}
        ></button>
      ) : (
        moviesPageButton
      )}
      <figure className="movies-card__container">
        <figcaption className="movies-card__caption">
          <p className="movies-card__name">{movie.nameRU}</p>
          <p className="movies-card__duration">
            {durationFormat(movie.duration)}
          </p>
        </figcaption>
      </figure>
    </li>
  );
}

export default MoviesCard;
