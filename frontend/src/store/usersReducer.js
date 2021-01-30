import { fetch } from "./csrf.js";

const GET_ALL_USERS = "users/GET_ALL_USERS ";
const GET_ONE_USER = "users/GET_ONE_USER";

export const getUsers = (users) => ({
  type: GET_ALL_USERS,
  users,
});

export const getOneUser = (data) => ({
  type: GET_ONE_USER,
  data,
});

export const allUsersData = () => async (dispatch) => {
  const res = await fetch("/api/users");
  dispatch(getUsers(res.data.users));
  return res;
};

export const oneUserData = (id) => async (dispatch) => {
  const res = await fetch(`/api/users/${id}`);
  dispatch(getOneUser(res.data));
  return res;
};

const initialState = {};

const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_USERS:
      newState = Object.assign({}, state, { user: action.users });
      return newState;
    case GET_ONE_USER:
      newState = Object.assign({}, state, { user: action.data });
      return newState;
    default:
      return state;
  }
};

export default userReducer;
