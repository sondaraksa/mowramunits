import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import { Link } from "react-router-dom";

import NavBar from "../layout/Navbar";
import FooterContainer from "../layout/FooterContainer";
import Footer from "../layout/Footer";
import ReactPaginate from "react-paginate";

import ArticleItem from "./ArticleItem";
import Spinner from "../common/Spinner";
import "./Article.css";
import { getArticlesLimitOffset } from "../../actions/articleActions";

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      perPage: 3,
      pageCount: 4
    };
  }
  componentDidMount() {
    this.props.getArticlesLimitOffset(this.state.perPage, this.state.offset);
  }

  handlePageClick = data => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.state.perPage);
    this.setState({ offset: offset }, () => {
      this.props.getArticlesLimitOffset(this.state.perPage, this.state.offset);
    });
  };

  render() {
    const { articles, loading } = this.props.article;
    let articleItems;
    let pageCount;

    if (articles === null || loading) {
      articleItems = <Spinner />;
    } else {
      pageCount = Math.ceil(articles.meta.total_count / articles.meta.limit);
      if (articles.article.length > 0) {
        articleItems = articles.article.map(article => (
          <ArticleItem key={article._id} article={article} />
        ));
      } else {
        articleItems = <h4>No Articles found...</h4>;
      }
    }
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1 className="text-center">NEWS CENTER</h1>
          <hr />
          <div className="row">
            <div className="col-9"> {articleItems}</div>

            <div className="col-3 NewsSearchSection">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          </div>
          <div id="react-paginate" className="row react-paginate">
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              pageLinkClassName={"page-item page-link"}
              previousLinkClassName={"page-item page-link"}
              nextLinkClassName={"page-item page-link"}
              activeLinkClassName={"page-item active"}
              activeClassName={"page-item active"}
            />
          </div>
        </div>
        <FooterContainer />
        <Footer />
      </div>
    );
  }
}

Articles.propTypes = {
  getArticlesLimitOffset: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  article: state.article
});

export default connect(
  mapStateToProps,
  { getArticlesLimitOffset }
)(Articles);
