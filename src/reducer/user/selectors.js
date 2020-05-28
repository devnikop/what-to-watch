import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getAuthorizationRequiredStatus = (state) =>
  state[NAME_SPACE].isAuthorizationRequired;
