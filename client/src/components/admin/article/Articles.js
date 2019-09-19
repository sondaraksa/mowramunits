import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search
} from "react-bootstrap-table-next/dist/react-bootstrap-table2-toolkit.min.js";
import paginationFactory from "react-bootstrap-table-next/dist/react-bootstrap-table2-paginator.min.js";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import "./article.css";
import Spinner from "../../common/Spinner";

import { getArticles } from "../../../actions/articleActions";

class Articles extends Component {
  componentDidMount() {
    this.props.getArticles();
  }
  render() {
    const { articles, loading } = this.props.article;
    const article_data = (articles || []).map((data, index) => {
      // data.seq = index + 1; //Try to add squence but fail logic at sort other columns
      data.date = moment(data.date).format("YYYY-MM-DD, h:mm:ss a");
      return data;
    });
    const { SearchBar } = Search;

    const MyExportCSV = props => {
      const handleClick = () => {
        props.onExport();
      };
      return (
        <div>
          <button className="btn btn-success" onClick={handleClick}>
            Export to CSV
          </button>
        </div>
      );
    };
    const defaultSorted = [
      {
        dataField: "date",
        order: "desc" //asc
      }
    ];

    const columns = [
      // {
      //   dataField: "seq",
      //   text: "No",
      //   sort: true,
      //   sortCaret: (order, column) => {
      //     if (!order) return <span className="order-4" />;
      //     else if (order === "asc") return <span className="caret-4-asc" />;
      //     else if (order === "desc") return <span className="caret-4-desc" />;
      //     return null;
      //   },
      //   style: {
      //     textAlign: "center"
      //   },
      //   headerStyle: {
      //     width: "10%",
      //     textAlign: "center"
      //   }
      // },

      {
        dataField: "title",
        text: "Title",
        sort: true,
        sortCaret: (order, column) => {
          if (!order) return <span className="order-4" />;
          else if (order === "asc") return <span className="caret-4-asc" />;
          else if (order === "desc") return <span className="caret-4-desc" />;
          return null;
        }
      },
      {
        dataField: "date",
        text: "Date",
        sort: true,
        sortCaret: (order, column) => {
          if (!order) return <span className="order-4" />;
          else if (order === "asc") return <span className="caret-4-asc" />;
          else if (order === "desc") return <span className="caret-4-desc" />;
          return null;
        },
        style: {
          textAlign: "center"
        },
        headerStyle: {
          width: "30%",
          textAlign: "center"
        }
      }
    ];

    const PaginationOptions = {
      paginationSize: 4,
      pageStartIndex: 1,
      // alwaysShowAllBtns: true, // Always show next and previous button
      // withFirstAndLast: false, // Hide the going to First and Last page button
      // hideSizePerPage: true, // Hide the sizePerPage dropdown always
      // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
      firstPageText: "First",
      prePageText: "Back",
      nextPageText: "Next",
      lastPageText: "Last",
      nextPageTitle: "First page",
      prePageTitle: "Pre page",
      firstPageTitle: "Next page",
      lastPageTitle: "Last page",
      showTotal: true,
      sizePerPageList: [
        {
          text: "5",
          value: 5
        },
        {
          text: "10",
          value: 10
        },
        {
          text: "20",
          value: 20
        }
      ] // A numeric array is also available. the purpose of above example is custom the text
    };

    const selectRow = {
      mode: "radio",
      clickToSelect: true,
      style: { backgroundColor: "#c8e6c9" }
    };
    const rowEvents = {
      onDoubleClick: (e, row, rowIndex) => {
        // console.log(`clicked on row with index: ${rowIndex} and ${row._id}`);
        // <Link to={`/articles/${row._id}`}>View Profile</Link>;
        window.location.href = `/admin/articles/${row._id}`;
      }
    };

    let articleItems;

    if (articles === null || loading) {
      articleItems = <Spinner />;
    } else {
      if (articles.length > 0) {
        articleItems = (
          <ToolkitProvider
            keyField="_id"
            data={article_data}
            columns={columns}
            search
          >
            {props => (
              <div>
                <br />
                <SearchBar {...props.searchProps} />

                <hr />
                <BootstrapTable
                  pagination={paginationFactory(PaginationOptions)}
                  {...props.baseProps}
                  defaultSorted={defaultSorted}
                  selectRow={selectRow}
                  rowEvents={rowEvents}
                />
                <MyExportCSV {...props.csvProps} />
              </div>
            )}
          </ToolkitProvider>
        );
      } else {
        articleItems = <h4>No Articles found...</h4>;
      }
    }

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Articles
            </li>
          </ol>
        </nav>
        <div className="container-fluid">
          <Link to="/create-article" className="btn btn-primary btn-md">
            <i className="fas fa-file-alt" /> New Article
          </Link>

          {articleItems}
        </div>
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
