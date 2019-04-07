import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../common/Modal";

class Profiles extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Profile
            </li>
          </ol>
        </nav>

        <div className="container-fluid">
          <h1>Profiles</h1>

          <div id="subMenuProfile">
            <Link to="/admin/create-profile" className="btn btn-primary btn-md">
              <i className="fas fa-user-plus" /> New Profile
            </Link>
          </div>
          <br />
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Unit</th>
                <th scope="col">Position</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Lim Canberra</td>
                <td>-</td>
                <td>Directing Manager</td>
                <td>
                  <button type="button" className="btn btn-primary btn-sm">
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Kang Chanthorn</td>
                <td>Central Point Unit</td>
                <td>Chief</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Kang Chansometh</td>
                <td>Central Point Unit</td>
                <td>Member</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Kang Sovichea</td>
                <td>Central Point Unit</td>
                <td>Member</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Lim Pitou</td>
                <td>Central Point Unit</td>
                <td>Member</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Long Vichea</td>
                <td>Central Point Unit</td>
                <td>Member</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>

              <tr>
                <th scope="row">7</th>
                <td>Iv Ratha</td>
                <td>Database Unit</td>
                <td>Chief</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">8</th>
                <td>Sok Mony</td>
                <td>Database Unit</td>
                <td>Member</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Son Daraksa</td>
                <td>Database Unit</td>
                <td>Member</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>Orch Bunaren</td>
                <td>Database Unit</td>
                <td>Member</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-edit" />
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    <i className="fas fa-user-minus" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-left">
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="###"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="###">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="###">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="###">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="###">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <Modal />
      </div>
    );
  }
}
export default Profiles;
