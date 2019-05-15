import React, { Component } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ArticleItem extends Component {
  render() {
    const { article } = this.props;
    let dateContent = <Moment format="YYYY/MM/DD">{article.date}</Moment>;
    return (
      <div className="row">
        <div className="col-4 mb-3">
          <img
            className="d-block w-100"
            // src={process.env.PUBLIC_URL + "/img/news/2.jpg"}
            src={process.env.PUBLIC_URL + `/uploads/${article.media[0].name}`}
            alt="First slide"
          />
        </div>
        <div className="col-8 NewsContentSection">
          <Link to={`/articles/${article._id}`}>
            <h5 className="row">{article.title}</h5>
          </Link>

          <p className="row text-left">{dateContent}</p>
        </div>
      </div>
    );
  }
}
ArticleItem.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleItem;
