import React, { useState } from "react";
// import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "./SplashPage.css";

function SplashPage() {
  // const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  // const [credential, setCredential] = useState("");
  // const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors([]);
  //   return dispatch(sessionActions.login({ credential, password })).catch(
  //     (res) => {
  //       if (res.data && res.data.errors) setErrors(res.data.errors);
  //     }
  //   );
  // };

  return (
    <>
      <div className="splash-container">
        <div className="splash-container-h1">
          <h1>Find photos of amazing homes.</h1>
        </div>
        <div className="splash-container-p">
          <p>
            Join the Hous'r community, "home" to millions of photos of the
            worlds amazing homes.
          </p>
        </div>
      </div>
    </>
  );
}

export default SplashPage;
