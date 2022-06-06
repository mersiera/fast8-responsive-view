import { COMMIT_USERS, COMMIT_USERBYPAGE } from "../actions/actionType";

const initialState = {
  users: [],
  userByPage: [],
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case COMMIT_USERS:
      return { ...state, users: action.payload };
    case COMMIT_USERBYPAGE:
      return { ...state, userByPage: action.payload };
    default:
      return state;
  }
}
