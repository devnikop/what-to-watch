import React from "react";

import Genre from "../genre/genre-list.jsx";
import MovieCards from "../movie-cards/movie-cards.jsx";

const Catalog = () => (
  <section className="catalog">
    <h2 className="catalog__title visually-hidden">Catalog</h2>
    <Genre />
    <MovieCards />
    <div className="catalog__more">
      <button className="catalog__button" type="button">
        Show more
      </button>
    </div>
  </section>
);

export default Catalog;
