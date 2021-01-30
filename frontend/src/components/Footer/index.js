import { NavLink } from "react-router-dom";
import "./footer.css";

const FooterPage = ({ sessionUser }) => {
  return (
    <>
      <div className="footer">
        <div>
          <NavLink to={"/about/"} className="active">
            About
          </NavLink>
        </div>
        <div>
          <NavLink to={"/guidelines"} className="active">
            Guidelines
          </NavLink>
        </div>
        <div>
          <NavLink to={"/help"} className="active">
            Help
          </NavLink>
        </div>
      </div>
      <div>
        <div className="footer-bottom">
          <i className="fa fa-facebook-official"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-snapchat"></i>
          <i className="fa fa-pinterest-p"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </div>
        <div className="dev">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/IamDgrant"
          >
            Developed by Andre Grant
          </a>
        </div>
      </div>
    </>
  );
};

export default FooterPage;
