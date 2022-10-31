import { useLocation } from "react-router-dom";
import "./MoviesAddButton.css";

function MoviesAddButton({ showMoreMovies }) {
  const location = useLocation();
  if (location.pathname === "/movies") {
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
}

export default MoviesAddButton;
