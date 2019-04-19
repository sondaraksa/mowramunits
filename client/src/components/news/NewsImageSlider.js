import React, { Component } from "react";

class NewsImageSlider extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide NewsImageSection"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
          <li data-target="#carouselExampleIndicators" data-slide-to="3" />
          <li data-target="#carouselExampleIndicators" data-slide-to="4" />
          <li data-target="#carouselExampleIndicators" data-slide-to="5" />
          <li data-target="#carouselExampleIndicators" data-slide-to="6" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/img/news/1.jpg"}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/img/news/2.jpg"}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/img/news/3.jpg"}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/img/news/4.jpg"}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/img/news/5.jpg"}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/img/news/6.jpg"}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/img/news/7.jpg"}
              alt="Second slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default NewsImageSlider;
