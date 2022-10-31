import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesAddButton from "../MoviesAddButton/MoviesAddButton";

export default function MoviesCardList({
  movies,
  showMoreMovies,
  isShowButton,
}) {
  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id || movie._id} movie={movie} />
        ))}
      </ul>
      {isShowButton && <MoviesAddButton showMoreMovies={showMoreMovies} />}
    </section>
  );
}
