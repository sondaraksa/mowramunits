import React, { Component } from "react";

class NavbarAdmin extends Component {
  render() {
    return (
      <div>
        {/* navbar admin */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <button
            className="btn btn-primary"
            id="menu-toggle"
            onClick={this.toggleMenu}
          >
            <i className="fas fa-bars" />
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Welcome, Son
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-cogs" />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-sign-out-alt" /> Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        {/* end of navbar admin */}
      </div>
    );
  }
}
export default NavbarAdmin;
