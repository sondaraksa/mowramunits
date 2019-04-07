import React, { Component } from "react";

class Pages extends Component {
  render() {
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Page
            </li>
          </ol>
        </nav>
        <h1>To Do Page</h1>
      </div>
    );
  }
}
export default Pages;
