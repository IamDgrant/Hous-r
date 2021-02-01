import { useState } from "react";
import { useDispatch } from "react-redux";
import * as photosActions from "../../store/photos";
import "./AddPhoto.css";

export default function AddPhotoForm({
  //   setChange,
  setAddPhoto,
  //   album,
  buttonClick,
  //   editPhoto,
  //   setEditPhoto,
  //   photoToEdit,
}) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  //   const [location, setLocation] = useState(null);
  //   const [description, setDescription] = useState(null);
  const [errors, setErrors] = useState([]);
  //   const [adderId, setadderId] = useState(photoToEdit ? photoToEdit.photo.adderId : 'Please select a composer');
  //   const albumId = album.id;

  //   const {composers, allComposers} = useSelector(state => state.songs)

  //   useEffect(() => {
  //     dispatch(photosActions.getComposers());
  //   }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    await dispatch(photosActions.createPhoto({ name, photo }))
      .then(() => {
        setName("");
        setPhoto(null);
        setAddPhoto(false);
        // setLocation(null);
        // setDescription(null);
        // setChange((change) => !change);
        buttonClick();
      })
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  };

  const updateFile = (e) => {
    const file = e.target.files[0];
    if (file) setPhoto(file);
  };

  return (
    <>
      <div className="add-photo-container">
        <div></div>
        {
          <h3 className="add-photo">
            <strong>Add a photo</strong>
          </h3>
        }
        {/* <button type="button" className="x" onClick={closeDiv}>
          <i className="fas fa-times"></i>
        </button> */}
      </div>
      <form className="form__photo" onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul className="errors">
            {errors.map((error, idx) => (
              <li className="errors--li" key={idx}>
                {error}
              </li>
            ))}
          </ul>
        )}
        <div>
          <label htmlFor="name">Photo Name:</label>
        </div>
        <div>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {
          <>
            <div>
              <label htmlFor="photo">Upload Photo:</label>
            </div>
            <div></div>
            <div>
              <input
                id="photo"
                type="file"
                className="button is-small input--photo"
                onChange={updateFile}
                required
              />
            </div>
          </>
        }
        <div className="button-container">
          {
            <button
              type="submit"
              className="button is-success is-small is-outlined is-light is-rounded is-focused has-text-weight-bold"
            >
              Upload
            </button>
          }
        </div>
      </form>
    </>
  );
  //   return <h3>loading...</h3>;
}
