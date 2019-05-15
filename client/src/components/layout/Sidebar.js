import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div>
        {/* <!-- Sidebar --> */}
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">Admin | Mowram Units</div>
          <div className="list-group list-group-flush">
            <Link
              className="list-group-item list-group-item-action bg-light"
              to="/dashbaord"
            >
              <i className="fas fa-cog" /> Dashboard
            </Link>
            <Link
              className="list-group-item list-group-item-action bg-light"
              to="/pages"
            >
              <i className="fas fa-pencil-alt" /> Pages
            </Link>
            <Link
              className="list-group-item list-group-item-action bg-light"
              to="/profiles"
            >
              <i className="fas fa-user-alt" /> Profiles
            </Link>
            <a
              className="list-group-item list-group-item-action bg-light"
              href="/"
              target="_blank"
            >
              <i className="fas fa-street-view" /> View Site
            </a>
          </div>
        </div>
        {/* <!-- /#sidebar-wrapper --> */}
      </div>
    );
  }
}
export default Sidebar;
