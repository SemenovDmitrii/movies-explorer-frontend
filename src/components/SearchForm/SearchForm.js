import { useState } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SerchForm({
  query,
  setQuery,
  isShort,
  setShort,
  searchMovies,
  required,
}) {
  const [error, setError] = useState("");

  function handleInputValue(e) {
    const value = e.target.value.trim();
    setQuery(value);
    setError(value ? "" : "Нужно ввести ключевое слово");
  }

  function submitSearchForm(e) {
    e.preventDefault();
    searchMovies();
  }

  return (
    <section className="search-form">
      <form
        className="search-form__container"
        name="form_serch"
        noValidate
        onSubmit={submitSearchForm}
      >
        <label className="search-form__input-container">
          <input
            className="search-form__input"
            id="film"
            type="text"
            name="name"
            placeholder="Фильм"
            required={required}
            value={query}
            onInput={handleInputValue}
          />
          <span className="search-form__input-error">{error}</span>
          <button
            type="submit"
            className="search-form__button"
            disabled={!!error}
          >
            Найти
          </button>
        </label>
        <FilterCheckbox isShort={isShort} setShort={setShort} />
      </form>
    </section>
  );
}
export default SerchForm;
