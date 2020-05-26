import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import compose from "recompose";

import { reducer } from "../store/reducer";
import { configureAPI } from "../api";

const api = configureAPI((...args) => store.dispatch(...args));

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(api)),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  )
);
