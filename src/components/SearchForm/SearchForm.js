import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__container">
        <label className="search-form__input-container">
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button type="button" className="search-form__button">
            Найти
          </button>
        </label>
        <FilterCheckbox />
      </form>
    </section>
  );
}
