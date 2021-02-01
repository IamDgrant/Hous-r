import { fetch } from "./csrf";

const LOAD_ALL_PHOTOS = "photo/LOAD_ALL_PHOTOS"
const LOAD_ONE_PHOTO = "photo/PHOTO"
// const LOAD_ALL_COMPOSERS = "photo/LOAD_ALL_COMPOSERS"
const ADD_PHOTO = "photo/ADD_PHOTO"
const DELETE_PHOTO = "photo/DELETE_PHOTO"


export const loadPhotos = (photos) => {
  return { type: LOAD_ALL_PHOTOS, photos };
};

export const loadOnePhoto = (data) => {
  return { type: LOAD_ONE_PHOTO, data };
}

export const addPhoto = (photo) => {
  return { type: ADD_PHOTO, photo };
}

export const deletePhoto = (photoId) => {
  return { type: DELETE_PHOTO, photoId };
}

// export const loadComposers = (composers) => {
//   return { type: LOAD_ALL_COMPOSERS, composers };
// }

export const getPhotos = () => async dispatch => {
  const res = await fetch(`/api/photo/`);
  dispatch(loadPhotos(res.data.photos));
};

export const getOnePhoto = (photoId) => async dispatch => {
  const res = await fetch(`/api/photo/${photoId}`);

  dispatch(loadOnePhoto(res.data));
  return res.data;
}

export const createPhoto = (newPhoto) => async dispatch => {
  const { name, photo, adderId } = newPhoto;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("adderId", adderId);
  // if (location.length) formData.append("location", location);
  // if (description.length) formData.append("description", description);
  formData.append("photo", photo);

  const res = await fetch(`/api/photo/new`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    body: formData,
  });

  dispatch(addPhoto(res.data.photo))
  return res.data;
}

// export const editPhoto = (photo) => async dispatch => {
//   const { title, composerId, firstName, lastName, photoToEdit } = photo;

//   const res = await fetch(`/api/photo/${photoToEdit.photo.id}`, {
//     method: "PATCH",
//     body: JSON.stringify({
//       title,
//       composerId,
//       firstName,
//       lastName,
//     }),
//   });

//   dispatch(addPhoto(res.data.photo))
//   return res.data;
// }

// export const deleteOnePhoto = (photoId) => async dispatch => {
//   const res = await fetch(`/api/photo/${photoId}`, {
//     method: 'DELETE',
//   });
//   if (res.ok) {
//     dispatch(deletePhoto(photoId));
//     return res;
//   }
// }

// export const getComposers = () => async dispatch => {
//   const res = await fetch(`/api/composers/`);
//   dispatch(loadComposers(res.data.composers))
// }



// const initialState = { allComposers: [], composers: {} };
const initialState = { };

export default function photosReducer(state = initialState, action) {
  const updateState = {...state}
  switch (action.type) {
    case LOAD_ALL_PHOTOS: {
      action.photos.forEach(photo => {
        updateState[photo.id] = photo;
      })
      return updateState;
    }
    case LOAD_ONE_PHOTO: {
      updateState.current = action.data.photo;
      return updateState;
    }
    // case LOAD_ALL_COMPOSERS: {
    //   updateState.allComposers = [];
    //   action.composers.forEach(composer => {
    //     updateState.composers[composer.id] = composer;
    //     updateState.allComposers.push(composer.id);
    //   })
    //   return updateState;
    // }
    case ADD_PHOTO: {
      updateState[action.photo.id] = action.photo;
      return updateState;
    }
    case DELETE_PHOTO: {
      delete updateState[action.photoId];
      return updateState;
    }
    default:
      return state;
  }
}