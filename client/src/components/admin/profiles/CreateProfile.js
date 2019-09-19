import React, { Component } from "react";
import { Link } from "react-router-dom";
import no_avatar from "../../../img/no_avatar.png";
import DateTimePicker from "react-datetime-picker";

class CreateProfile extends Component {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item" aria-current="page">
              <Link to="/profiles">Profiles</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Profile
            </li>
          </ol>
        </nav>
        <div className="container pb-5">
          <small className="d-block pb-3">* = required field</small>

          <form action="/admin/create-profile">
            <div className="row">
              <div className="col-8">
                <div className="row form-group">
                  <div className="col-6">
                    <small className="form-text text-muted">Latin Name</small>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="* Latin Name"
                      name="english_name"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <small className="form-text text-muted">Khmer Name</small>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="* Khmer Name"
                      name="khmer_name"
                      required
                    />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-6">
                    <small className="form-text text-muted">Gender</small>
                    <select
                      className="form-control form-control-lg"
                      name="gender"
                    >
                      <option value="0">* Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div className="col-6">
                    <small className="form-text text-muted">
                      Date of Birth
                    </small>
                    <DateTimePicker
                      className="form-control form-control-lg"
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <small className="form-text text-muted">Email Address</small>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Email Address"
                    name="email"
                    type="email"
                  />
                </div>
                <div className="row form-group">
                  <div className="col-6">
                    <small className="form-text text-muted">Department</small>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Department"
                      name="department"
                    />
                  </div>

                  <div className="col-6">
                    <small className="form-text text-muted">Office</small>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Office"
                      name="office"
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
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
                </div>
              </div>
            </div>

            <div className="form-group">
              <small className="form-text text-muted">
                City {"&"} state suggested (eg. Boston, MA)
              </small>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Location"
                name="location"
              />
            </div>

            <div className="form-group">
              <small className="form-text text-muted">
                Give us an idea of where you are at in your career
              </small>
              <select className="form-control form-control-lg" name="status">
                <option value="0">* Select Professional Status</option>
                <option value="Developer">General Director</option>
                <option value="Junior Developer">
                  Deputy General Director
                </option>
                <option value="Senior Developer">Chief Department</option>
                <option value="Manager">Deputy Chief Department</option>
                <option value="Student or Learning">Chief Officer</option>
                <option value="Instructor">Deputy Chief Officer</option>
                <option value="Intern">Officer</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <small className="form-text text-muted">
                Please use comma separated values (eg.
                Hydrology,Meteorology,Media)
              </small>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Skills"
                name="skills"
              />
            </div>

            <input type="submit" className="btn btn-info btn-block mt-4" />
          </form>
        </div>
      </div>
    );
  }
}
export default CreateProfile;
