import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* ciontainer fluid */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        <div className="container-fluid">
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">
                    <i className="fas fa-pencil-alt" /> Pages <span>23</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">
                    <i className="fas fa-edit" /> Posts <span>67</span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title">
                    <i className="fas fa-users" /> Profiles <span>26</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of container fluid */}
      </div>
    );
  }
}
export default Dashboard;
