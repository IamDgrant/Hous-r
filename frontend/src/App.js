import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import SplashPage from "./components/SplashPage";
import UserHomePage from "./components/UserHome";
import UserHomeStream from "./components/UserHomeStream";
import UserAlbums from "./components/UserAlbums";
import Footer from "./components/Footer";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <SplashPage />
          </Route>
          <Route path="/home" exact>
            <UserHomePage sessionUser={sessionUser} />
          </Route>
          <Route path="/homestream" exact>
            <UserHomeStream sessionUser={sessionUser} />
          </Route>
          <Route path="/albums" exact>
            <UserAlbums sessionUser={sessionUser} />
          </Route>
        </Switch>
      )}
      <Footer isLoaded={isLoaded} />
    </>
  );
}

export default App;
