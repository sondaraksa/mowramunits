import React, { Component } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ArticleImageSlider from "./ArticleImageSlider";
import NavBar from "../layout/Navbar";
import FooterContainer from "../layout/FooterContainer";
import Footer from "../layout/Footer";

import Spinner from "../common/Spinner";
import { getArticleByArticleId } from "../../actions/articleActions";

class Article extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getArticleByArticleId(this.props.match.params.id);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.article.article === null && this.props.article.loading) {
      this.props.history.push("/not-found");
    }
  }

  render() {
    const { article, loading } = this.props.article;
    let articleContent;
    if (article === null || loading) {
      articleContent = <Spinner />;
    } else {
      articleContent = (
        <div>
          <ArticleImageSlider media={article.media} />
          {/* <div className="DatePost">
            <span className="day">១៥</span>
            <span className="year">មីនា</span>
          </div> */}
          <div className="contentDetail">
            <h3 className="row">{article.title}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              id="content"
              className="row NewsContent"
            />
          </div>
        </div>
      );
    }

    return (
      <div>
        <NavBar />
        <div className="container NewsDetail">
          <h1 className="text-center">NEWS CENTER</h1>
          <hr />
          <Link to="/articles" className="btn btn-light">
            Back
          </Link>
          <br />
          <br />
          <div className="row">
            <div className="col-12">{articleContent}</div>
          </div>
        </div>
        <FooterContainer />
        <Footer />
      </div>
    );
  }
}
Article.propTypes = {
  getArticleByArticleId: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  article: state.article
});

export default connect(
  mapStateToProps,
  { getArticleByArticleId }
)(Article);
