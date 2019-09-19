import React, { Component } from "react";

import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

import TextFieldGroup from "../../common/TextFieldGroup";
// import TextAreaFieldGroup from "../../common/TextAreaFieldGroup";
import { createArticle } from "../../../actions/articleActions";

//using react ckeditor5 for textarea
import CKEditor from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import Heading from "@ckeditor/ckeditor5-heading/src/heading";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

class CreateArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      photos: null,
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    // this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
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
    e.preventDefault();
    let formData = new FormData();
    formData.append("title", this.state.title);
    formData.append("content", this.state.content);

    if (this.state.photos) {
      for (var x = 0; x < this.state.photos.length; x++) {
        formData.append(
          "file",
          this.state.photos[x],
          this.state.photos[x].name
        );
      }
    }
    this.props.createArticle(
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      },
      this.props.history
    );
  }

  render() {
    const { errors } = this.state;

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
              Create Article
            </li>
          </ol>
        </nav>
        <div className="container-fluid col-9">
          <h1 className="text-center">Create Article</h1>

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
              {/* <TextAreaFieldGroup
                placeholder="Content"
                name="content"
                value={this.state.content}
                onChange={this.onChange}
                error={errors.content}
              /> */}
              <CKEditor
                editor={ClassicEditor}
                data=""
                config={{
                  placeholder: "Type the content here!"
                }}
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

            <input
              type="submit"
              value="Submit"
              className="btn btn-info btn-block mt-4"
            />
          </form>
        </div>
      </div>
    );
  }
}
CreateArticle.propTypes = {
  article: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  article: state.article,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { createArticle }
)(withRouter(CreateArticle));
