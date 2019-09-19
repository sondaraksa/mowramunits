import React from "react";
import { Link } from "react-router-dom";
import mowramlogo from "../../img/mowram.png";
import "./FooterContainer.css";

export default () => {
  const imgStytle = {
    width: 150
    // height: 200
  };
  return (
    <div>
      <footer className="page-footer font-small stylish-color-dark pt-5 mt-3">
        {/* <!-- Footer Links --> */}
        <div className="container text-center text-md-left">
          {/* <!-- Grid row --> */}
          <div className="row">
            {/* <!-- Grid column --> */}
            <div className="col-md-2  text-center  mx-auto">
              {/* <!-- Content --> */}
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                MOWRAM
              </h5>
              {/* <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p> */}
              <img
                src={mowramlogo}
                style={imgStytle}
                className="card-img-top"
                alt="mowramlogo"
              />
            </div>
            {/* <!-- Grid column --> */}

            <hr className="clearfix w-100 d-md-none" />

            {/* <!-- Grid column --> */}
            <div className="col-md-4 mx-auto">
              {/* <!-- Links --> */}
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Related Link
              </h5>

              <ul class="list-unstyled">
                <li className="mt-2">
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <Link
                    to="http://mowram.gov.kh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Ministry of Water Resources and Meteorology
                  </Link>
                </li>
                <li className="mt-2">
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <Link
                    to="http://www.cnmc.gov.kh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Cambodia National Mekong Committee
                  </Link>
                </li>
                <li className="mt-2">
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <Link
                    to="http://tonlesap.gov.kh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Tonle Sap Authority
                  </Link>
                </li>
                <li className="mt-2">
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <Link
                    to="http://www.cambodiameteo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Cambodia Meteorology
                  </Link>
                </li>
                <li className="mt-2">
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <Link
                    to="https://www.dhrw-cam.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Cambodia Hydrology
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}

            <hr className="clearfix w-100 d-md-none" />

            <hr className="clearfix w-100 d-md-none" />

            {/* <!-- Grid column --> */}
            <div className="col-md-4 mx-auto">
              {/* <!-- Links --> */}
              <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                Contact
              </h5>

              <ul className="list-unstyled">
                <li className="mt-2">
                  <i className="fas fa-map-marker-alt" />
                  {"    "}
                  <span>#364, Monivong BLVD, Phsar Deumthkov</span>
                </li>
                <li className="mt-2">
                  <i className="fas fa-phone" />
                  {"    "}
                  <span>+855 (0) 23 6300 769</span>
                </li>
                <li className="mt-2">
                  <i className="fas fa-envelope" />
                  {"    "}
                  <span>contact@morwamunits.com</span>
                </li>
                <li className="mt-2">
                  <i className="fas fa-clock" />
                  {"    "}
                  <span>Mon-Fri/8:00-5:30</span>
                </li>
              </ul>
            </div>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!-- Grid row --> */}
        </div>
        {/* <!-- Footer Links --> */}

        <hr />

        {/* <!-- Call to action --> */}
        <ul class="list-unstyled list-inline text-center py-2">
          <li class="list-inline-item">
            <h5 class="mb-1">Register for free</h5>
          </li>
          <li class="list-inline-item">
            <Link to="#!" class="btn btn-danger btn-rounded">
              Sign up!
            </Link>
          </li>
        </ul>
        {/* <!-- Call to action --> */}

        <hr />

        {/* <!-- Social buttons --> */}
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <Link to="#!" class="btn-floating btn-fb mx-1">
              <i class="fab fa-facebook-f"> </i>
            </Link>
          </li>
          <li class="list-inline-item">
            <Link to="#!" class="btn-floating btn-tw mx-1">
              <i class="fab fa-twitter"> </i>
            </Link>
          </li>
          <li class="list-inline-item">
            <Link to="#!" class="btn-floating btn-gplus mx-1">
              <i class="fab fa-google-plus-g"> </i>
            </Link>
          </li>
          <li class="list-inline-item">
            <Link to="#!" class="btn-floating btn-li mx-1">
              <i class="fab fa-linkedin-in"> </i>
            </Link>
          </li>
          <li class="list-inline-item">
            <Link to="#!" class="btn-floating btn-dribbble mx-1">
              <i class="fab fa-dribbble"> </i>
            </Link>
          </li>
        </ul>
        {/* <!-- Social buttons --> */}

        {/* <!-- Copyright --> */}
        <div class="footer-copyright text-center py-3" />
        {/* <!-- Copyright --></hr> */}
      </footer>
    </div>
  );
};
