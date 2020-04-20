import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";

const moviesList = [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`];

const init = () => {
  ReactDOM.render(<App movies={moviesList} />, document.querySelector(`#root`));
};

init();
