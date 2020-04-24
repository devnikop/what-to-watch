import React from "react";
import PropTypes from "prop-types";

import MainPage from "../main-page/main-page.jsx";

const App = ({ movies }) => {
  return <MainPage movies={movies} />;
};

App.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default App;
