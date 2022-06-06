import { commitUsers, commitUserByPage } from "./actionCreator";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch, getState) => {
    try {
      const {
        data: { results },
      } = await axios({
        method: "GET",
        url: `https://randomuser.me/api/?results=28`,
      });
      dispatch(commitUsers(results));
    } catch (error) {
      console.error("Error:", error);
    }
  };
};

export const paginationUser = (page) => {
  return (dispatch, getState) => {
    const users = getState().userReducer.users;
    let skip = (page - 1) * 4;
    const newUserPerPage = users.slice(skip, skip + 4);
    dispatch(commitUserByPage(newUserPerPage));
  };
};
