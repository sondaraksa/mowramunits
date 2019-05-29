import React, { Component } from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from "ReactBootstrapTable2Paginator";
import paginationFactory from "react-bootstrap-table-next/dist/react-bootstrap-table2-paginator.min.js";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./article.css";

class ArticleItems extends Component {
  render() {
    const columns = [
      {
        dataField: "id",
        text: "Number"
      },
      {
        dataField: "title",
        text: "title"
      },
      {
        dataField: "date",
        text: "date"
      }
    ];
    const { article } = this.props;
    // let dateContent = <Moment format="YYYY/MM/DD">{article.date}</Moment>;

    return (
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={article}
        columns={columns}
        pagination={paginationFactory()}
      />
    );
  }
}
ArticleItems.propTypes = {
  article: PropTypes.object.isRequired
};
export default ArticleItems;
