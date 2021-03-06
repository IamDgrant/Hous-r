import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { oneUserData } from "../../store/usersReducer";
import "./UserAbout.css";

const UserAboutPage = ({ sessionUser }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneUserData(sessionUser.id));
  }, [dispatch, sessionUser]);

  return (
    <>
      <div id="userAbout_flex-container">
        <div>
          <h1>About Me</h1>
        </div>
      </div>
    </>
  );
};

export default UserAboutPage;
