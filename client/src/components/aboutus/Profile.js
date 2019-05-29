import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "../layout/Navbar";
import FooterContainer from "../layout/FooterContainer";
import Footer from "../layout/Footer";

class Profile extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="profile">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-6">
                    <Link
                      to="/about-us"
                      className="btn btn-light mb-3 float-left"
                    >
                      Back
                    </Link>
                  </div>
                  <div className="col-6" />
                </div>

                {/* <!-- Profile Header --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-body bg-info text-white mb-3">
                      <div className="row">
                        <div className="col-4 col-md-3 m-auto">
                          <img
                            className="rounded-circle"
                            src={
                              process.env.PUBLIC_URL +
                              "/img/profileImages/berra_lim.jpg"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="text-center">
                        <h1 className="display-4 text-center">
                          Mr. Lim Canberra
                        </h1>
                        <p className="lead text-center">
                          Deputy Director General for Administration Affair /
                          MOWRAM
                        </p>
                        <p>Seattle, WA</p>
                        <p>
                          <a className="text-white p-2" href="#section">
                            <i className="fas fa-globe fa-2x" />
                          </a>
                          <a className="text-white p-2" href="#section">
                            <i className="fab fa-twitter fa-2x" />
                          </a>
                          <a className="text-white p-2" href="#section">
                            <i className="fab fa-facebook fa-2x" />
                          </a>
                          <a className="text-white p-2" href="#section">
                            <i className="fab fa-linkedin fa-2x" />
                          </a>
                          <a className="text-white p-2" href="#section">
                            <i className="fab fa-instagram fa-2x" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Profile About --> */}
                <div className="row">
                  <div className="col-md-12">
                    <div className="card card-body bg-light mb-3">
                      <h3 className="text-center text-info">John's Bio</h3>
                      <p className="lead">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Provident fuga cum necessitatibus blanditiis vel,
                        officia facere porro esse numquam assumenda doloremque
                        saepe aliquam nemo excepturi aliquid maiores! Excepturi,
                        libero repudiandae.
                      </p>
                      <hr />
                      <h3 className="text-center text-info">Skill Set</h3>
                      <div className="row">
                        <div className="d-flex flex-wrap justify-content-center align-items-center">
                          <div className="p-3">
                            <i className="fa fa-check" /> HTML
                          </div>
                          <div className="p-3">
                            <i className="fa fa-check" /> CSS
                          </div>
                          <div className="p-3">
                            <i className="fa fa-check" /> JavaScript
                          </div>
                          <div className="p-3">
                            <i className="fa fa-check" /> Python
                          </div>
                          <div className="p-3">
                            <i className="fa fa-check" /> C#
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Profile Creds --> */}
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="text-center text-info">Experience</h3>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <h4>Microsoft</h4>
                        <p>Oct 2011 - Current</p>
                        <p>
                          <strong>Position:</strong> Senior Developer
                        </p>
                        <p>
                          <strong>Description:</strong> Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Unde doloribus
                          dicta enim excepturi laborum voluptatem nam provident
                          quisquam facere. Quae?
                        </p>
                      </li>
                      <li className="list-group-item">
                        <h4>Sun Microsystems</h4>
                        <p>Oct 2004 - Nov 2011</p>
                        <p>
                          <strong>Position: </strong> Systems Admin
                        </p>
                        <div>
                          <p>
                            <strong>Location: </strong> Miami, FL
                          </p>
                          <strong>Description: </strong> Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Unde doloribus
                          dicta enim excepturi laborum voluptatem nam provident
                          quisquam facere. Quae?
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-center text-info">Education</h3>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <h4>Univeresity Of Washington</h4>
                        <p>Sep 1993 - June 1999</p>
                        <p>
                          <strong>Degree: </strong>Masters
                        </p>
                        <p>
                          <strong>Field Of Study: </strong>Computer Science
                        </p>

                        <p>
                          <strong>Description:</strong> Lorem ipsum dolor sit
                          amet consectetur adipisicing elit. Unde doloribus
                          dicta enim excepturi laborum voluptatem nam provident
                          quisquam facere. Quae?
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterContainer />
        <Footer />
      </div>
    );
  }
}

export default Profile;
