import { SHORT_FILM } from "./constants";

export function searchMovies(movies, filter) {
  if (movies.length) {
    return movies.filter((movie) => {
      const { query, isShort } = filter;
      const isShortMovie = movie.duration <= SHORT_FILM;
      const isMatchName = movie.nameRU
        .toLowerCase()
        .includes(query?.toLowerCase());
      return isShort ? isMatchName && isShortMovie : isMatchName;
    });
  }
}
