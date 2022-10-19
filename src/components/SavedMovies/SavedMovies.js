import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies(props) {
  return (
    <div className="saved-movies">
      <Header onOpenMenu={props.onOpenMenu} />
      <Menu isOpen={props.isOpen} onClose={props.onClose} />
      <SearchForm />
      <MoviesCardList isSavedMoviesList={true} />
      <Footer />
    </div>
  );
}
