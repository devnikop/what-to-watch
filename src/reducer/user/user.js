const initialState = {
  isAuthorizationRequired: false,
};

const ActionType = {
  SET_AUTHORIZATION_STATUS: `SET_AUTHORIZATION_STATUS`,
};

const ActionCreator = {
  setAuthorizationStatus: (status) => ({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: status,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_AUTHORIZATION_STATUS:
      return {
        ...state,
        isAuthorizationRequired: action.payload,
      };
    default:
      return initialState;
  }
};

export { ActionType, ActionCreator, reducer };
