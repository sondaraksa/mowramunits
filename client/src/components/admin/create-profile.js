import React, { Component } from "react";
import { Link } from "react-router-dom";
import no_avatar from "../../img/no_avatar.png";

class CreateProfile extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              <Link to="/admin/profiles">Profiles</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Profile
            </li>
          </ol>
        </nav>

        <h1 className="display-4 text-center">Create Member Profile</h1>
        <p className="lead text-center">
          Let's get some information to make member profile stand out
        </p>
        <small className="d-block pb-3">* = required field</small>

        <form action="/admin/create-profile">
          <div className="form-group">
            <div className="row form-group justify-content-md-center">
              <div className="col-3 col-md-auto">
                <img className="rounded-circle" src={no_avatar} alt="" />
              </div>
            </div>
            <div className="row form-group justify-content-md-center">
              <div className="col-3 col-md-auto">
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile02"
                    />
                    <label
                      className="custom-file-label"
                      aria-describedby="inputGroupFileAddon02"
                    >
                      Choose file
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="row form-group">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="* First Name Kh"
                  name="firstname_kh"
                  required
                />
              </div>

              <div className="col-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="* Last Name Kh"
                  name="lastname_kh"
                  required
                />
              </div>
            </div>

            <div className="row form-group">
              <div className="col-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="* First Name En"
                  name="firstname_en"
                  required
                />
              </div>

              <div className="col-6">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="* Last Name En"
                  name="lastname_en"
                  required
                />
              </div>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-6">
              <select className="form-control form-control-lg" name="gender">
                <option value="0">* Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="col-6">
              <select className="form-control form-control-lg" name="gender">
                <option value="0">* Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <input
              className="form-control form-control-lg"
              placeholder="Email Address"
              name="email"
              type="email"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Company"
              name="company"
            />
            <small className="form-text text-muted">
              Could be your own company or one you work for
            </small>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Website"
              name="website"
            />
            <small className="form-text text-muted">
              Could be your own or a company website
            </small>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Location"
              name="location"
            />
            <small className="form-text text-muted">
              City {"&"} state suggested (eg. Boston, MA)
            </small>
          </div>

          <div className="form-group">
            <select className="form-control form-control-lg" name="status">
              <option value="0">* Select Professional Status</option>
              <option value="Developer">General Director</option>
              <option value="Junior Developer">Deputy General Director</option>
              <option value="Senior Developer">Chief Department</option>
              <option value="Manager">Deputy Chief Department</option>
              <option value="Student or Learning">Chief Officer</option>
              <option value="Instructor">Deputy Chief Officer</option>
              <option value="Intern">Officer</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text text-muted">
              Give us an idea of where you are at in your career
            </small>
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Skills"
              name="skills"
            />
            <small className="form-text text-muted">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>

          <input type="submit" className="btn btn-info btn-block mt-4" />
        </form>
      </div>
    );
  }
}
export default CreateProfile;
