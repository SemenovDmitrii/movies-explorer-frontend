import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import { SHORT_FILM } from "../../utils/constants";

function Movies({ movies, isLoadingMovies, loadingMoviesError }) {
  const queryLocal = localStorage.getItem("searchQueryMovies") || "";
  const [query, setQuery] = useState(queryLocal);

  const isShortLocal =
    JSON.parse(localStorage.getItem("isShortMovies")) || false;
  const [isShort, setShort] = useState(isShortLocal);

  const [currentSearchQuery, setCurrentSearchQuery] = useState(queryLocal);

  useEffect(() => {
    localStorage.setItem("searchQueryMovies", query);
    localStorage.setItem("isShortMovies", JSON.stringify(isShort));
  }, [query, isShort]);

  const submitSearchForm = (event) => {
    event.preventDefault();
    setQuery(currentSearchQuery);
  };

  const handleFoundMovies = movies
    .filter((movie) =>
      query ? movie.nameRU.toLowerCase().includes(query.toLowerCase()) : false
    )
    .filter((movie) => (isShort ? movie.duration <= SHORT_FILM : true));

  return (
    <div className="movies">
      <Header />
      <SearchForm
        onSubmit={submitSearchForm}
        setSearchQuery={setCurrentSearchQuery}
        query={query}
        setQuery={setQuery}
        isShort={isShort}
        setShort={setShort}
        required={true}
      />
      {isLoadingMovies ? (
        <Preloader />
      ) : (
        <MoviesCardList
          query={query}
          movies={handleFoundMovies}
          loadingMoviesError={loadingMoviesError}
        />
      )}
      <Footer />
    </div>
  );
}

export default Movies;
