import "./MoviesCard.css";
import { durationFormat } from "../../utils/durationFormat";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

function MoviesCard({ movie }) {
  const baseURL = "https://api.nomoreparties.co";
  const location = useLocation();
  const savedMoviesContext = useContext(AppContext);
  const isSavedMoviesPage = location.pathname === "/saved-movies";

  const handleSaveMovie = () => {
    savedMoviesContext.saveMovie(movie);
  };

  const handleDeleteMovie = () => {
    savedMoviesContext.deleteMovie(
      savedMoviesContext.savedMovies.find(
        (savedMovie) => savedMovie.id === movie.id
      ).savedId
    );
  };

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
          onClick={handleDeleteMovie}
          className="movies-card__button movies-card__button_type_remove"
        />
      ) : savedMoviesContext.savedMovies
          .map((movie) => movie.id)
          .includes(movie.id) ? (
        <button
          onClick={handleDeleteMovie}
          className="movies-card__button movies-card__button_saved"
        />
      ) : (
        <button
          onClick={handleSaveMovie}
          className="movies-card__button movies-card__button_type_save"
        ></button>
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
