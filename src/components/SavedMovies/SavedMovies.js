import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { searchMovies } from "../../utils/searchMovies";

function SavedMovies({
  movies,
  loadSavedMovies,
  isLoadingMovies,
  loadingMoviesError,
}) {
  const [foundMovies, setFoundMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isShort, setShort] = useState(false);

  useEffect(() => {
    loadSavedMovies();
  }, []);

  useEffect(() => {
    setFoundMovies(movies);
  }, [movies]);

  useEffect(() => {
    if (movies.length) handleFoundMovies();
  }, [isShort]);

  function handleFoundMovies() {
    setFoundMovies(searchMovies(movies, { query, isShort }));
  }

  return (
    <div className="saved-movies">
      <Header />
      <SearchForm
        searchMovies={handleFoundMovies}
        query={query}
        setQuery={setQuery}
        isShort={isShort}
        setShort={setShort}
      />
      {movies.length === 0 && !foundMovies.length && (
        <p className="movies-cards__message">Нет сохранённых фильмов</p>
      )}
      {isLoadingMovies ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={foundMovies}
          loadingMoviesError={loadingMoviesError}
        />
      )}
      <Footer />
    </div>
  );
}

export default SavedMovies;
