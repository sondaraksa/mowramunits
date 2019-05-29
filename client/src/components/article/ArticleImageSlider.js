import React, { Component } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

class ArticleImageSlider extends Component {
  render() {
    const { media } = this.props;
    const imgItems = media.map((data, index) => (
      <img
        key={index}
        src={process.env.PUBLIC_URL + `/uploads/${data.name}`}
        alt={data.name}
      />
    ));

    return (
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        axis="horizontal"
        showThumbs={false}
        dynamicHeight={true}
      >
        {imgItems}
      </Carousel>
    );
  }
}

ArticleImageSlider.propTypes = {
  media: PropTypes.array.isRequired
};
export default ArticleImageSlider;
