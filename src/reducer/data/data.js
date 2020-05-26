import { modelMovies } from "./movie-adapter";

const initialState = {
  activeGenre: `All genres`,
  movies: [],
};

const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  SET_GENRE: `SET_GENRE`,
};

const ActionCreator = {
  load_movies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies,
  }),

  setGenre: (payload) => ({
    type: ActionType.SET_GENRE,
    payload,
  }),
};

const Operation = {
  load_movies: () => async (dispatch, _getState, api) => {
    const response = await api.get(`/films`);
    const movies = modelMovies(response.data);
    dispatch(ActionCreator.load_movies(movies));
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return { ...state, movies: action.payload };
    case ActionType.SET_GENRE:
      return { ...state, activeGenre: action.payload };

    default:
      return state;
  }
};

export { ActionCreator, ActionType, Operation, reducer };
