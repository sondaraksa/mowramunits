import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextFieldGroup from "../../common/TextFieldGroup";
import { getArticleByArticleId } from "../../../actions/articleActions";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      photos: null,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params._id) {
      this.props.getArticleByArticleId(this.props.match.params._id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.article.article) {
      const article = nextProps.article.article;
      // Set component fields state
      this.setState({
        title: article.title,
        content: article.content,
        photos: article.media
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeHandler = e => {
    this.setState({
      photos: e.target.files
    });
  };

  onSubmit(e) {
    console.log(this.state);
    e.preventDefault();
    let formData = new FormData();

    formData.append("title", this.state.title);
    formData.append("content", this.state.content);

    if (this.state.photos) {
      for (var x = 0; x < this.state.photos.length; x++) {
        console.log(this.state.photos[x].name);
        formData.append(
          "file",
          this.state.photos[x],
          this.state.photos[x].name
        );
      }
    }
  }

  render() {
    const { errors } = this.state;
    const imgStyle = {
      width: "auto",
      height: "160px",
      paddingLeft: "20px"
    };
    let imgItems;
    if (this.state.photos) {
      imgItems = this.state.photos.map((data, index) => (
        <div key={index} className="row mt-3">
          <img
            src={process.env.PUBLIC_URL + `/uploads/${data.name}`}
            alt={data.name}
            style={imgStyle}
          />
        </div>
      ));
    }

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <Link
              to="/articles"
              className="breadcrumb-item"
              aria-current="page"
            >
              Articles
            </Link>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Article
            </li>
            <div className="container-fluid col-9">
              <h1 className="text-center">Edit Article</h1>

              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <TextFieldGroup
                    placeholder="Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChange}
                    error={errors.title}
                  />
                </div>
                <div className="form-group">
                  <label>Content</label>
                  <CKEditor
                    editor={ClassicEditor}
                    data={this.state.content}
                    // config={{
                    //   placeholder: "Type the content here!"
                    // }}
                    onInit={editor => {
                      // You can store the "editor" and use when it is needed.
                      // console.log("Editor is ready to use!", editor);
                    }}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      this.setState({ content: data });

                      // console.log({ event, editor, data });
                      // console.log("hello" + this.state.content);
                    }}
                    onBlur={editor => {
                      // console.log("Blur.", editor);
                    }}
                    onFocus={editor => {
                      // console.log("Focus.", editor);
                    }}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="file"
                    className="form-control"
                    multiple
                    data-show-upload="true"
                    data-show-caption="true"
                    onChange={this.onChangeHandler}
                  />
                </div>
                <div className="form-group">{imgItems}</div>
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </ol>
        </nav>
      </div>
    );
  }
}
EditArticle.propTypes = {
  getArticleByArticleId: PropTypes.func.isRequired,
  article: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  article: state.article,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { getArticleByArticleId }
)(withRouter(EditArticle));
