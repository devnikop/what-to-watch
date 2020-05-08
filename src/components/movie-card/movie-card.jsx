import PropTypes from "prop-types";
import React from "react";

import VideoPlayer from "../video-player/video-player.jsx";

const MovieCard = ({ isPlaying, movie, onMouseEnter, onMouseLeave }) => {
  const { id, poster, src, title } = movie;

  const _onMouseEnterHandler = () => {
    onMouseEnter(id);
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseEnter={_onMouseEnterHandler}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer isPlaying={isPlaying} poster={poster} src={src} />
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
  isPlaying: PropTypes.bool.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export default MovieCard;
