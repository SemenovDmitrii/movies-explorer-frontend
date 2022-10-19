import React from "react";
import "./MoviesCard.css";
import image from "../../images/img33.jpg";

export default function MoviesCard(props) {
  const { isSavedMoviesList, isSaved } = props;
  const cardButtonClassName = `movies-card__button ${
    isSavedMoviesList
      ? "movies-card__button_type_remove"
      : isSaved
      ? "movies-card__button_saved"
      : "movies-card__button_type_save"
  }`;

  return (
    <li className="movies-card">
      <a
        className="movies-card__link"
        href="https://www.youtube.com/"
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="movies-card__image"
          src={image}
          alt="33 слова о дизайне"
        />
      </a>
      <button type="button" className={cardButtonClassName}></button>
      <figure className="movies-card__container">
        <figcaption className="movies-card__caption">
          <p className="movies-card__name">33 слова о дизайне</p>
          <p className="movies-card__duration">1ч 17м</p>
        </figcaption>
      </figure>
    </li>
  );
}
