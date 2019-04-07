import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import no_avatar from "../img/no_avatar.png";

import Sidebar from "./layout/Sidebar";

import Dashboard from "./admin/Dashboard";
import Pages from "./admin/Pages";
import Profiles from "./admin/Profiles";
import CreateProfile from "./admin/create-profile";

class Backend extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    let isToggled = this.state.toggled;
    this.setState({ toggled: !isToggled });
  }

  render() {
    const { user } = this.props.auth;
    let buttonClass = this.state.toggled ? "toggled" : "";
    return (
      <Router>
        <div className="App">
          <div className={buttonClass} id="wrapper">
            <div className={"d-flex"}>
              <Sidebar />

              {/* <!-- Page Content --> */}
              <div id="page-content-wrapper">
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

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                      <li className="nav-item active">
                        <a className="nav-link" href="#image">
                          <img
                            className="rounded-circle"
                            src={no_avatar}
                            alt={user.name}
                            style={{ width: "25px", marginRight: "5px" }}
                            title="User Avatar"
                          />{" "}
                          {user.name}
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#dropdown"
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
                          <Link className="dropdown-item" to="/admin/setting">
                            Setting
                          </Link>
                          <div className="dropdown-divider" />
                          <Link
                            to="/login"
                            onClick={this.onLogoutClick.bind(this)}
                            className="dropdown-item"
                          >
                            <i className="fas fa-sign-out-alt" /> Logout
                          </Link>
                          {/* <a className="dropdown-item" href="#">
                            <i className="fas fa-sign-out-alt" /> Logout
                          </a> */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* end of navbar admin */}

                <Switch>
                  {/* content goes here */}
                  <Route exact path="/admin" component={Dashboard} />
                  <Route exact path="/admin/pages" component={Pages} />
                  <Route exact path="/admin/profiles" component={Profiles} />
                  <Route
                    exact
                    path="/admin/create-profile"
                    component={CreateProfile}
                  />
                  {/* end of content */}
                </Switch>
              </div>
              {/* <!-- /#page-content-wrapper --> */}
            </div>
            {/* <!-- /#wrapper --> */}
          </div>
        </div>
      </Router>
    );
  }
}

Backend.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Backend);
