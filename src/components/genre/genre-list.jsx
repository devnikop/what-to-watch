import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import { ActionCreators } from "../../store/reducer";

const Genre = ({ activeGenre, genres, onClick }) => {
  const _handlerGenreClick = (evt) => {
    evt.preventDefault();
    onClick(evt.currentTarget.textContent);
  };

  return <ul className="catalog__genres-list">
    {genres.map((genre, index) => <li
      className={`
        catalog__genres-item
        ${activeGenre === genre && `catalog__genres-item--active`}
      `}
      key={`genre-${index}`}
    >
      <a
        href="#"
        className="catalog__genres-link"
        onClick={_handlerGenreClick}
      >
        {genre}
      </a>
    </li>)}
  </ul>
};

Genre.propTypes = {
  activeGenre: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  activeGenre: state.activeGenre,
  genres: [...state.movies.reduce((acc, movie) =>
    acc.add(movie.genre),
    new Set([`All genres`])
  )],
});

const mapDispatch = {
  onClick: ActionCreators.setGenre
};

export { Genre };
export default connect(mapState, mapDispatch)(Genre);
