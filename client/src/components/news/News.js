import React, { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">NEWS CENTER</h1>
        <hr />
        <div className="row">
          <div className="col-9">
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
          <div className="col-3 NewsSearchSection">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="row text-center">
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
      </div>
    );
  }
}
export default News;
