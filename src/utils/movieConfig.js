export const movieConfig = (savedMovie) => ({
  trailerLink: savedMovie.trailerLink,
  image: savedMovie.image,
  nameRU: savedMovie.nameRU,
  duration: savedMovie.duration,
  id: savedMovie.movieId,
  savedId: savedMovie._id,
});
