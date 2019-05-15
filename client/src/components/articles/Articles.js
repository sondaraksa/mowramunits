import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavBar from "../layout/Navbar";
import FooterContainer from "../layout/FooterContainer";
import Footer from "../layout/Footer";

import ArticleItem from "./ArticleItem";
import Spinner from "../common/Spinner";

import { getArticles } from "../../actions/articleActions";

class Articles extends Component {
  componentDidMount() {
    this.props.getArticles();
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.article.article === null && this.props.article.loading) {
  //     this.props.history.push("/not-found");
  //   }
  // }

  render() {
    const { articles, loading } = this.props.article;
    let articleItems;
    if (articles === null || loading) {
      articleItems = <Spinner />;
    } else {
      if (articles.length > 0) {
        articleItems = articles.map(article => (
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
        </div>
        <FooterContainer />
        <Footer />
      </div>
    );
  }
}

Articles.propTypes = {
  getArticles: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  article: state.article
});

export default connect(
  mapStateToProps,
  { getArticles }
)(Articles);
