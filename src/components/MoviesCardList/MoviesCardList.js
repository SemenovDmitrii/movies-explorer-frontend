import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesAddButton from "../MoviesAddButton/MoviesAddButton";

import {
  WIDTH_DESKTOP,
  WIDTH_TABLET,
  WIDTH_MOBILE,
  QUANTITY_MOVIES_DESKTOP,
  MOVIES_DESKTOP_ADD,
  QUANTITY_MOVIES_TABLET,
  MOVIES_TABLET_ADD,
  QUANTITY_MOVIES_MOBILE,
  MOVIES_MOBILE_ADD,
} from "../../utils/constants";

export default function MoviesCardList({ movies, query }) {
  const location = useLocation();
  const isMoviesPage = location.pathname === "/movies";
  const isSavedMoviesPage = location.pathname === "/saved-movies";
  const [countCards, setCountCards] = useState(0);
  const [countCardsAdd, setCountCardsAdd] = useState(0);

  useEffect(() => {
    changeCountCards();
    window.addEventListener("resize", changeCountCards);
    return () => window.removeEventListener("resize", changeCountCards);
  }, []);

  function changeCountCards() {
    const widthWindow = document.documentElement.clientWidth;

    if (widthWindow >= WIDTH_DESKTOP) {
      setCountCards(QUANTITY_MOVIES_DESKTOP);
      setCountCardsAdd(MOVIES_DESKTOP_ADD);
      return;
    }

    if (WIDTH_TABLET <= widthWindow && widthWindow < WIDTH_DESKTOP) {
      setCountCards(QUANTITY_MOVIES_TABLET);
      setCountCardsAdd(MOVIES_TABLET_ADD);
      return;
    }

    if (WIDTH_MOBILE <= widthWindow && widthWindow < WIDTH_TABLET) {
      setCountCards(QUANTITY_MOVIES_MOBILE);
      setCountCardsAdd(MOVIES_MOBILE_ADD);
      return;
    }
  }

  function showMoreMovies() {
    setCountCards(countCards + countCardsAdd);
  }

  if (isMoviesPage && query.length !== 0 && movies.length === 0) {
    return <p className="movies-cards__message">Ничего не найдено</p>;
  }

  if (isSavedMoviesPage && movies.length === 0) {
    return <p className="movies-cards__message">Нет сохранённых фильмов</p>;
  }

  return (
    <section className="movies-cards">
      <ul className="movies-cards__list">
        {movies.slice(0, countCards).map((movie) => (
          <MoviesCard key={movie.id || movie._id} movie={movie} />
        ))}
      </ul>
      {countCards < movies.length && (
        <MoviesAddButton showMoreMovies={showMoreMovies} />
      )}
    </section>
  );
}
