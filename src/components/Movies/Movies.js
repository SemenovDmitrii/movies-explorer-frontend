import React from "react";
import "./Movies.css";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Menu from "../Menu/Menu";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";

export default function Movies(props) {
  return (
    <div className="movies">
      <Header onOpenMenu={props.onOpenMenu} />
      <SearchForm />
      <MoviesCardList isSavedMoviesList={false} />
      <div className="movies__download-more movies__download-more_enable">
        <button type="button" className="movies__download-more-button">
          Ещё
        </button>
      </div>
      <Menu isOpen={props.isOpen} onClose={props.onClose} />
      <Footer />
    </div>
  );
}
