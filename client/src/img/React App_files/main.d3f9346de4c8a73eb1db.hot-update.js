webpackHotUpdate("main",{

/***/ "./src/components/articles/Articles.js":
/*!*********************************************!*\
  !*** ./src/components/articles/Articles.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layout/Navbar */ "./src/components/layout/Navbar.js");
/* harmony import */ var _layout_FooterContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../layout/FooterContainer */ "./src/components/layout/FooterContainer.js");
/* harmony import */ var _layout_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../layout/Footer */ "./src/components/layout/Footer.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-paginate */ "./node_modules/react-paginate/dist/index.js");
/* harmony import */ var react_paginate__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_paginate__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ArticleItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ArticleItem */ "./src/components/articles/ArticleItem.js");
/* harmony import */ var _common_Spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/Spinner */ "./src/components/common/Spinner.js");
/* harmony import */ var _actions_articleActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/articleActions */ "./src/actions/articleActions.js");





var _jsxFileName = "/Users/sondaraksa/Desktop/mowramunits/client/src/components/articles/Articles.js";


 //import { Link } from "react-router-dom";









var Articles =
/*#__PURE__*/
function (_Component) {
  Object(_Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Articles, _Component);

  function Articles(props) {
    var _this;

    Object(_Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Articles);

    _this = Object(_Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Articles).call(this, props));

    _this.handlePageClick = function (data) {
      var offset = data.selected;
      console.log(offset);

      _this.setState({
        offset: offset
      }, function () {
        _this.props.getArticlesLimitOffset(_this.state.perPage, _this.state.offset);
      });
    };

    _this.state = {
      offset: 0,
      perPage: 3,
      pageCount: 4
    };
    return _this;
  }

  Object(_Users_sondaraksa_Desktop_mowramunits_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Articles, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getArticlesLimitOffset(this.state.perPage, this.state.offset); // this.setState({
      //   pageCount: this.props.article.length
      // });
    } // componentWillReceiveProps(nextProps) {
    //   if (nextProps.article.article === null && this.props.article.loading) {
    //     this.props.history.push("/not-found");
    //   }
    // }

  }, {
    key: "render",
    value: function render() {
      var _this$props$article = this.props.article,
          articles = _this$props$article.articles,
          loading = _this$props$article.loading;
      var articleItems;

      if (articles === null || loading) {
        articleItems = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_common_Spinner__WEBPACK_IMPORTED_MODULE_13__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        });
      } else {
        if (articles.length > 0) {
          articleItems = articles.map(function (article) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ArticleItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
              key: article._id,
              article: article,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              },
              __self: this
            });
          });
        } else {
          articleItems = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "No Articles found...");
        }

        console.log(this.state.perPage, this.state.offset, this.state.pageCount);
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "NEWS CENTER"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, " ", articleItems), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-3 NewsSearchSection",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        className: "form-control mr-sm-2",
        type: "search",
        placeholder: "Search",
        "aria-label": "Search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_paginate__WEBPACK_IMPORTED_MODULE_11___default.a, {
        previousLabel: "previous",
        nextLabel: "next",
        breakLabel: "...",
        breakClassName: "break-me",
        pageCount: this.state.pageCount,
        marginPagesDisplayed: this.state.perPage,
        pageRangeDisplayed: this.state.offset,
        onPageChange: this.handlePageClick,
        containerClassName: "pagination",
        subContainerClassName: "pages pagination",
        activeClassName: "active",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout_FooterContainer__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_layout_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }));
    }
  }]);

  return Articles;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Articles.propTypes = {
  getArticlesLimitOffset: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.func.isRequired,
  article: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    article: state.article
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, {
  getArticlesLimitOffset: _actions_articleActions__WEBPACK_IMPORTED_MODULE_14__["getArticlesLimitOffset"]
})(Articles));

/***/ })

})
//# sourceMappingURL=main.d3f9346de4c8a73eb1db.hot-update.js.map