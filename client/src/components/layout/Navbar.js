import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../node_modules/flag-icon-css/css/flag-icon.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Mowram Technical Units
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    About Us
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="/director-message" className="dropdown-item">
                      Minister's Message
                    </Link>
                    <Link to="/about-us" className="dropdown-item">
                      Who We Are
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/articles">
                  {" "}
                  News Center
                </Link>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Our Project
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="#" className="dropdown-item">
                      Central Point Unit
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Hydrology Unit
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Meteology Unit
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Database Unit
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Media Unit
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Remote Scensing And Thesis Unit
                    </Link>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <div className="dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Language
                  </div>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link to="#" className="dropdown-item">
                      US | <span className="flag-icon flag-icon-us" />
                    </Link>
                    <Link to="#" className="dropdown-item">
                      KH | <span className="flag-icon flag-icon-kh" />
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
