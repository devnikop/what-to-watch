const modelMovie = (movie) => ({
  [`id`]: movie[`id`],
  [`poster`]: movie[`poster_image`],
  [`src`]: movie[`preview_video_link`],
  [`title`]: movie[`name`],
});

export const modelMovies = (movies) => movies.map((movie) => modelMovie(movie));
