import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

import moviesList from "./mocks/films";

const init = () => {
  ReactDOM.render(<App movies={moviesList} />, document.querySelector(`#root`));
};

init();
