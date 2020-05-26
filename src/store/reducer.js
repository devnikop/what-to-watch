// import moviesList from "../mocks/films";

const initialState = {
  activeGenre: `All genres`,
  filteredMovies: moviesList,
  movies: moviesList,
};

const SET_GENRE = `SET_GENRE`;

const ActionCreators = {
  setGenre: (payload) => ({
    type: SET_GENRE,
    payload,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GENRE:
      return {...state, activeGenre: action.payload}

    default:
      return state;
  }
};

export {
  ActionCreators,
  reducer
}
