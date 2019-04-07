import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">Mowram Technical Units</h1>
                  <p className="lead">
                    {" "}
                    Welcome to our site. We are delighted to have you here.
                  </p>
                  <hr />

                  <Link to="/about-us" className="btn btn-lg btn-info">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
