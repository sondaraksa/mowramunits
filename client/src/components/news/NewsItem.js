import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsItem extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <img
            className="d-block w-100"
            src={process.env.PUBLIC_URL + "/img/news/2.jpg"}
            alt="First slide"
          />
        </div>
        <div className="col-8 NewsContentSection">
          <Link to="/news/1">
            <h5 className="row">
              ក្រុមការងារផ្នែកជលសាស្រ្ត នៃក្រសួងធនធានទឹក និងឧតុនិយម
              បានបន្តចុះត្រួតពិនិត្យ ថែទាំ
              និងជួសជុលស្ថានីយ៍ជលសាស្រ្តស្វ័យប្រវត្តិ ចំនួន ៣កន្លែង
              (ស្ថានីយកំពតស្ថិតក្នុងខេត្តកំពត, ស្ថានីយដូនកែវ
              ស្ថិតក្នុងខេត្តតាកែវ និងស្ថានីយសាក់សំពៅ ស្ថិតក្នុងក្រុងភ្នំពេញ)។
            </h5>
          </Link>
          <p className="row text-left">
            ថ្ងៃសុក្រ ១០កើត ខែផល្គុន ឆ្នាំច សំរឹទ្ធិស័ក ព.ស២៥៦២ ត្រូវនឹងថ្ងៃទី
            ១៥ខែមីនា ឆ្នាំ ២០១៩ ក្រុមការងារផ្នែកជលសាស្រ្ត នៃក្រសួងធនធានទឹក
            និងឧតុនិយម បានបន្តចុះត្រួតពិនិត្យ ថែទាំ
            និងជួសជុលស្ថានីយ៍ជលសាស្រ្តស្វ័យប្រវត្តិ ចំនួន ៣កន្លែង ...
          </p>
          <p className="row text-left">March 16, 2019</p>
        </div>
      </div>
    );
  }
}
export default NewsItem;
