import PropTypes from "prop-types";
import React from "react";

class MovieCard extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, src } = this.props.movie;

    return (
      <article className="small-movie-card catalog__movies-card">
        <button className="small-movie-card__play-btn" type="button">
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
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default MovieCard;
