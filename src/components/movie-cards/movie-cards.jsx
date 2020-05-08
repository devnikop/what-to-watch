import PropTypes from "prop-types";
import React from "react";

import MovieCard from "../movie-card/movie-card.jsx";

class MovieCards extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      idPlay: -1,
    };

    this._timer = null;

    this._mouseEnterHandlerBinded = this._mouseEnterHandler.bind(this);
    this._mouseLeaveHandlerBinded = this._mouseLeaveHandler.bind(this);
  }

  render() {
    const { movies } = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => (
          <MovieCard
            isPlaying={this.state.idPlay === movie.id}
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
    this._timer = setTimeout(() => {
      this.setState({
        idPlay: id,
      });
    }, 1000)
  }

  _mouseLeaveHandler() {
    this._timer = null;
    this.setState({
      idPlay: -1,
    });
  }
}

MovieCards.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MovieCards;
