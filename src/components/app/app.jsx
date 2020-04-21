import React from "react";
import PropTypes from "prop-types";

import MainPage from "../main-page/main-page.jsx";

const App = ({movies}) => {
  return <MainPage movies={movies} onClick={() => {}} />;
};

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
