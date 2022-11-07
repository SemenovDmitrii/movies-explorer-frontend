import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import { SHORT_FILM } from "../../utils/constants";

function SavedMovies({ movies, isLoadingMovies, loadingMoviesError }) {
  const [currentSearchQuery, setCurrentSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const [isShort, setShort] = useState(false);

  const submitSearchForm = (event) => {
    event.preventDefault();
    setQuery(currentSearchQuery);
  };

  const handleFoundMovies = movies
    .filter((movie) =>
      query ? movie.nameRU.toLowerCase().includes(query.toLowerCase()) : true
    )
    .filter((movie) => (isShort ? movie.duration <= SHORT_FILM : true));

  return (
    <div className="saved-movies">
      <Header />
      <SearchForm
        onSubmit={submitSearchForm}
        setSearchQuery={setCurrentSearchQuery}
        query={query}
        setQuery={setQuery}
        isShort={isShort}
        setShort={setShort}
      />
      {isLoadingMovies ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={handleFoundMovies}
          query={query}
          loadingMoviesError={loadingMoviesError}
        />
      )}
      <Footer />
    </div>
  );
}

export default SavedMovies;
