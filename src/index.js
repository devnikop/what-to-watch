import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/app/app.jsx";

import { store } from "./reducer/store-setup";
import { Operation } from "./reducer/data/data";

store.dispatch(Operation.load_movies());

const init = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
  );
};

init();
