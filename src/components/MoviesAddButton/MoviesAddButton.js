import "./MoviesAddButton.css";

function MoviesAddButton({ showMoreMovies }) {
    return (
      <div className="movies__download-more">
        <button
          type="button"
          className="movies__download-more-button"
          onClick={showMoreMovies}
        >
          Ещё
        </button>
      </div>
    );
}

export default MoviesAddButton;
