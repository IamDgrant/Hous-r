import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
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
        <NavLink
          to="/signup"
          className="main-nav"
          activeClassName="main-nav-active"
        >
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <div className="navBar">
      <div>
        <NavLink exact to="/" className="main-nav">
          <img
            src="https://housr-home-images.s3.amazonaws.com/hones/favpng_vector-graphics-house-symbol-building.png"
            alt="house logo"
          ></img>{" "}
          hous'r
        </NavLink>
      </div>
      <div className="search">
        {/* <div> */}
          <input
            type="text"
            className="searchTerm"
            placeholder="What house are you looking for?"
          />
          <button type="submit" class="searchButton">
            <i className="fa fa-search"></i>
          </button>
        {/* </div> */}
      </div>
      <div>{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
