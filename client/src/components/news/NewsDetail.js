import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewsImageSlider from "./NewsImageSlider";

class NewsDetail extends Component {
  render() {
    return (
      <div className="container NewsDetail">
        <h1 className="text-center">NEWS CENTER</h1>
        <hr />
        <Link to="/news" className="btn btn-primary">
          News
        </Link>
        <br />
        <br />
        <div className="row">
          <div className="col-12">
            <NewsImageSlider />
            <div className="DatePost">
              <span className="day">១៥</span>
              <span className="year">មីនា</span>
            </div>
            <div className="CententDetail">
              <h3 className="row">
                ក្រុមការងារផ្នែកជលសាស្រ្ត នៃក្រសួងធនធានទឹក និងឧតុនិយម
                បានបន្តចុះត្រួតពិនិត្យ ថែទាំ
                និងជួសជុលស្ថានីយ៍ជលសាស្រ្តស្វ័យប្រវត្តិ ចំនួន ៣កន្លែង
                (ស្ថានីយកំពតស្ថិតក្នុងខេត្តកំពត, ស្ថានីយដូនកែវ
                ស្ថិតក្នុងខេត្តតាកែវ និងស្ថានីយសាក់សំពៅ ស្ថិតក្នុងក្រុងភ្នំពេញ)។
              </h3>

              <p className="row text-align">
                ថ្ងៃសុក្រ ១០កើត ខែផល្គុន ឆ្នាំច សំរឹទ្ធិស័ក ព.ស២៥៦២
                ត្រូវនឹងថ្ងៃទី ១៥ខែមីនា ឆ្នាំ ២០១៩ ក្រុមការងារផ្នែកជលសាស្រ្ត
                នៃក្រសួងធនធានទឹក និងឧតុនិយម បានបន្តចុះត្រួតពិនិត្យ ថែទាំ
                និងជួសជុលស្ថានីយ៍ជលសាស្រ្តស្វ័យប្រវត្តិ ចំនួន ៣កន្លែង
                (ស្ថានីយកំពតស្ថិតក្នុងខេត្តកំពត, ស្ថានីយដូនកែវ
                ស្ថិតក្នុងខេត្តតាកែវ និងស្ថានីយសាក់សំពៅ ស្ថិតក្នុងក្រុងភ្នំពេញ)។
                ក្រុមការងារបានដោះស្រាយបញ្ហាដែលកើតមានដូចជា : -
                លាងសម្អាតឧបករណ៍ជៀសវាងមានបញ្ហារអាក់រអួលក្នុងការបញ្ជូនទិន្នន័យ -
                ធ្វើ Calibrate ទិន្នន័យដែលវាស់ដោយស្ថានីយដើម្បីអោយមានសុក្រិតភាព។
                - បានពន្យល់ណែនាំមន្ត្រីនៅមន្ទីក្នុងការងារថែទាំឧបករណ៍ -
                ចុះពិនិត្យឧបករណ៍វាស់កំពស់ទឹកដែលជនអនាមិកបានលួចកាត់ខ្សែsensor។
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsDetail;
