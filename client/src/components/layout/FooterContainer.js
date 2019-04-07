import React from "react";
import mowramlogo from "../../img/mowram.jpg";
import adblogo from "../../img/adblogo.jpg";

export default () => {
  const imgStytle = {
    width: 100,
    height: 100
  };
  return (
    <div className="footer-container">
      <hr />
      <div className="row">
        <div className="footer-item col-lg-2 text-center">
          <div className="card border-light">
            <div className="card-body mb-3">
              <h5 className="card-title">MOWRAM</h5>
              <img
                src={mowramlogo}
                style={imgStytle}
                className="card-img-top"
                alt="mowramlogo"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-2 text-center">
          <div className="card border-light">
            <div className="card-body mb-3">
              <h5 className="card-title">DONOR</h5>
              <img
                src={adblogo}
                style={imgStytle}
                className="card-img-top"
                alt="adblogo"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-light">
            <div className="card-body">
              <h5 className="card-title">Related Link</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <a
                    href="http://mowram.gov.kh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Ministry of Water Resources and Meteorology
                  </a>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <a
                    href="http://www.cambodiameteo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Cambodia Meteorology
                  </a>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <a
                    href="http://www.dhrw-cam.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Cambodia Hydrology
                  </a>
                </li>
                <li>
                  <i className="fas fa-chevron-right" />
                  {"  "}
                  <a
                    href="https://www.adb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    Asian Development Bank
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-light">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <ul className="list-unstyled">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  {"    "}
                  <span>#364, Monivong BLVD, Phsar Deumthkov</span>
                </li>
                <li>
                  <i className="fas fa-phone" />
                  {"    "}
                  <span>+855 (0) 23 6300 769</span>
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  {"    "}
                  <span>contact@morwamunits.com</span>
                </li>
                <li>
                  <i className="fas fa-clock" />
                  {"    "}
                  <span>Mon-Fri/8:00-5:30</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
