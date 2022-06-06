import { COMMIT_USERS, COMMIT_USERBYPAGE } from "./actionType";

export const commitUsers = (payload) => {
  return { type: COMMIT_USERS, payload };
};

export const commitUserByPage = (payload) => {
  return { type: COMMIT_USERBYPAGE, payload };
};
