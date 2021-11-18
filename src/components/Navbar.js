import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet ,BrowserRouter} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <li className="navbar-brand" href="">
          {props.title}
        </li>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li> */}
            <li className="my-2 mx-2">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable dark mode
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
