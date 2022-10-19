import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList(props) {
  return (
    <section className="movies-cards">
      <p className="movies-cards__message">Список пуст</p>
      <ul className="movies-cards__list">
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={true}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={true}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={true}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
        <MoviesCard
          isSaved={false}
          isSavedMoviesList={props.isSavedMoviesList}
        />
      </ul>
    </section>
  );
}
