import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { oneUserData } from "../../store/usersReducer";
import "./UserHome.css";

const UserHomePage = ({ sessionUser }) => {
  const year = sessionUser.createdAt.slice(0, 4);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneUserData(sessionUser.id));
  }, [dispatch, sessionUser]);

  return (
    <>
      <div id="userHome_flex-container">
        <div>
          {/* {userName.map((user) => (
            <NavLink key={user.id} id={user.id} to={`/user/${user.id}`}>
              Welcome {user.username}
            </NavLink>
          ))} */}
          <h1>Welcome, {sessionUser.username} | Joined {year}</h1>
        </div>
        {/* <div>
          <h1>| Joined {year}</h1>
        </div> */}
      </div>
      <div className="userHome-Nav-menu">
        <div>
          <NavLink to={`/about/${sessionUser.id}}`} className="active">
            About
          </NavLink>
        </div>
        <div>
          <NavLink to={`/homestream/${sessionUser.id}}`} className="active">
            Home'stream
          </NavLink>
        </div>
        <div>
          <NavLink to={`/albums/${sessionUser.id}}`} className="active">
            Albums
          </NavLink>
        </div>
        <div>
          <NavLink to={`/favorites/${sessionUser.id}}`} className="active">
            Favorites
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default UserHomePage;
