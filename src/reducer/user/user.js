const initialState = {
  authToken: {},
  isAuthorizationRequired: false,
};

const ActionType = {
  ADD_TOKEN: `ADD_TOKEN`,
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
};

const ActionCreator = {
  addToken: (token) => ({
    type: ActionType.ADD_TOKEN,
    payload: token,
  }),
  setAuthorizationStatus: (status) => ({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: status,
  }),
};

const Operation = {
  tryAuthorize: ({ email, password }) => async (dispatch, _getState, api) => {
    const response = await api.post(`./login`, { email, password });
    dispatch(ActionCreator.addToken(response.data));
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TOKEN:
      return {
        ...state,
        authToken: action.payload,
      };
    case ActionType.SET_AUTHORIZATION_STATUS:
      return {
        ...state,
        isAuthorizationRequired: action.payload,
      };
    default:
      return initialState;
  }
};

export { ActionType, ActionCreator, Operation, reducer };
