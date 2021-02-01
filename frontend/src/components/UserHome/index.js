import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { oneUserData } from "../../store/usersReducer";
import AddPhotoModal from "../AddPhotoModal";
import "./UserHome.css";

const UserHomePage = ({ sessionUser }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionUser) {
      dispatch(oneUserData(sessionUser.id));
    }
  }, [dispatch, sessionUser]);
  if (!sessionUser) {
    return null;
  }
  console.log(sessionUser);
  const year = sessionUser.createdAt.slice(0, 4);

  return (
    <>
      <div id="userHome_flex-container">
        <div>
          <h1>
            Welcome, {sessionUser.username} | Joined {year}
          </h1>
        </div>
      </div>
      <div className="userHome-Nav-menu">
        <div>
          <NavLink to={`/about/${sessionUser.id}`} className="active">
            About
          </NavLink>
        </div>
        <div>
          <NavLink to={`/homestream/${sessionUser.id}`} className="active">
            Home'stream
          </NavLink>
        </div>
        <div>
          <NavLink to={`/albums/${sessionUser.id}`} className="active">
            Albums
          </NavLink>
        </div>
        <div>
          <NavLink to={`/favorites/${sessionUser.id}`} className="active">
            Favorites
          </NavLink>
        </div>
        <div>
          <AddPhotoModal />
        </div>
      </div>
    </>
  );
};

export default UserHomePage;
