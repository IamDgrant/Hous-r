import { fetch } from "./csrf.js";

const GET_ALL_PHOTOS = "users/GET_ALL_PHOTOS";
const GET_ONE_PHOTO = "users/GET_ONE_PHOTO";

export const getAllPhotos = (users) => ({
  type: GET_ALL_PHOTOS,
  users,
});
export const getOnePhoto = (users) => ({
  type: GET_ONE_PHOTO,
  users,
});

export const allPhotos = () => async (dispatch) => {
  const res = await fetch("/api/users");
  dispatch(getAllPhotos(res.data.users));
  return res;
};

export const onePhoto = () => async (dispatch) => {
  const res = await fetch(`/api/users/`);
  dispatch(getOnePhoto(res.data));
  return res;
};

const initialState = {};

const userReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_PHOTOS:
      newState = Object.assign({}, state, { user: action.users });
      return newState;
    case GET_ONE_PHOTO:
      newState = Object.assign({}, state, { user: action.data });
      return newState;
    default:
      return state;
  }
};

export default userReducer;
