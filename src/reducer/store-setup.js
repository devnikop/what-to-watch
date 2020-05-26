import { applyMiddleware, createStore } from "redux";
import { compose } from "recompose";
import thunk from "redux-thunk";

import { configureAPI } from "../api";
import reducer from "./index";

const api = configureAPI((...args) => store.dispatch(...args));

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
);
