import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
        {/* <NavLink
          to="/signup"
          className="main-nav"
          activeClassName="main-nav-active"
        >
          Sign Up
        </NavLink> */}
      </>
    );
  }

  return (
    
    // <div className="navBar">
    //   <div>
        // <NavLink exact to="/" className="main-nav">
        //   <img
        //     src="https://housr-home-images.s3.amazonaws.com/hones/favpng_vector-graphics-house-symbol-building.png"
        //     alt="house logo"
        //   ></img>{" "}
        //   hous'r
        // </NavLink>
    //   </div>
      // <div className="search">
      //   {/* <div> */}
      //     <input
      //       type="text"
      //       className="searchTerm"
      //       placeholder="What house are you looking for?"
      //     />
      //     <button type="submit" class="button">
      //       <i className="fa fa-search"></i>
      //     </button>
      //   {/* </div> */}
      // </div>
      // <div>{isLoaded && sessionLinks}</div>
    // </div>

    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink exact to="/" className="navbar-item">
          <img
            src="https://housr-home-images.s3.amazonaws.com/hones/favpng_vector-graphics-house-symbol-building.png"
            alt="house logo"
          ></img>{" "}
          hous'r
        </NavLink>
      </div>
      <div className="search">
          <input
            type="text"
            className="searchTerm"
            placeholder="What house are you looking for?"
          />
          <button type="submit" class="searchButton button">
            <i className="fa fa-search"></i>
          </button>
      </div>
      <div>{isLoaded && sessionLinks}</div>
</nav>
  );
}

export default Navigation;
