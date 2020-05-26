import { createSelector } from "reselect";
import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getMovies = (state) => state[NAME_SPACE].movies;
export const getGenre = (state) => state[NAME_SPACE].activeGenre;

export const getUniqueGenres = createSelector(getMovies, (movies) => [
  ...new Set(movies.genre),
]);

export const getMoviesFilteredByGenre = createSelector(
  [getMovies, getGenre],
  (movies, genre) =>
    genre === `All genres`
      ? movies
      : movies.filter((movie) => movie.genre === genre)
);
