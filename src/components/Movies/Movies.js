import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { searchMovies } from "../../utils/searchMovies";
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

function Movies({
  movies,
  loadAllMovies,
  isLoadingMovies,
  loadingMoviesError,
}) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isShort, setShort] = useState(false);
  const [countCards, setCountCards] = useState(0);
  const [countCardsAdd, setCountCardsAdd] = useState(0);

  useEffect(() => {
    changeCountCards();
    window.addEventListener("resize", changeCountCards);
    return () => window.removeEventListener("resize", changeCountCards);
  }, []);

  useEffect(() => {
    if (movies.length) {
      setFoundMovies(searchMovies(movies, { query, isShort }));
    }
  }, [movies]);

  useEffect(() => {
    const queryLocal = localStorage.getItem("searchQueryMovies");
    const isShortLocal = JSON.parse(localStorage.getItem("isShortMovies"));

    if (queryLocal) {
      setQuery(queryLocal);
      loadAllMovies();
    }

    if (isShortLocal) setShort(isShortLocal);
  }, []);

  useEffect(() => {
    if (query) handleFoundMovies();
  }, [isShort]);

  function handleFoundMovies() {
    if (!movies.length) {
      loadAllMovies();
    } else {
      setFoundMovies(searchMovies(movies, { query, isShort }));
    }
    localStorage.setItem("searchQueryMovies", query);

    localStorage.setItem("isShortMovies", JSON.stringify(isShort));
  }

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

  return (
    <div className="movies">
      <Header />
      <SearchForm
        searchMovies={handleFoundMovies}
        query={query}
        setQuery={setQuery}
        isShort={isShort}
        setShort={setShort}
        required={true}
      />
      {!!movies.length && !foundMovies.length && (
        <p className="movies-cards__message">Ничего не найдено</p>
      )}
      {isLoadingMovies ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={foundMovies.slice(0, countCards)}
          showMoreMovies={showMoreMovies}
          isShowButton={countCards < foundMovies.length}
          loadingMoviesError={loadingMoviesError}
        />
      )}
      <Footer />
    </div>
  );
}

export default Movies;
