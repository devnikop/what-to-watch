import PropTypes from "prop-types";
import React from "react";

const MovieCard = ({ movie, onMouseEnter, onMouseLeave, onClick }) => {
  const { id, src, title } = movie;

  const _onClickHandler = () => {
    onClick(id);
  };

  const _onMouseEnterHandler = () => {
    onMouseEnter(id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={_onMouseEnterHandler}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="small-movie-card__play-btn"
        type="button"
        onClick={_onClickHandler}
      >
        Play
      </button>
      <div className="small-movie-card__image">
        <img src={src} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
