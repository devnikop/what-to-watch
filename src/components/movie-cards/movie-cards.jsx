import PropTypes from "prop-types";
import React from "react";

import MovieCard from "../movie-card/movie-card.jsx";

class MovieCards extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      idActive: -1,
    };

    this._mouseEnterHandlerBinded = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandlerBinded = this._mouseLeaveHandler.bind(this);
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onMouseEnter={this._mouseEnterHandlerBinded}
            onMouseLeave={this._mouseLeaveHandlerBinded}
          />
        ))}
      </div>
    );
  }

  _mouseEnterHandler(id) {
    this.setState({
      idActive: id,
    });
  }

  _mouseLeaveHandler() {
    this.setState({
      idActive: -1,
    });
  }
}

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MovieCards;
