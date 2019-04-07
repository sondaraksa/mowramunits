import React, { Component } from "react";
import CardItems from "./CardItems";

class MeteoUnit extends Component {
  render() {
    const NoImageUrl = "no_avatar.png";
    return (
      <div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <CardItems
              id="1"
              name="Mr.Kang Chanthorn"
              unitPos="Cheif Central Point Unit"
              mowramPos="Deputy Chief Department"
              imgUrl={NoImageUrl}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <CardItems
              id="1"
              name="Mr.Kang Chanthorn"
              unitPos="Cheif Central Point Unit"
              mowramPos="Deputy Chief Department"
              imgUrl={NoImageUrl}
            />
          </div>
          <div className="col-sm-4">
            <CardItems
              id="1"
              name="Mr.Kang Chanthorn"
              unitPos="Cheif Central Point Unit"
              mowramPos="Deputy Chief Department"
              imgUrl={NoImageUrl}
            />
          </div>
          <div className="col-sm-4">
            <CardItems
              id="1"
              name="Mr.Kang Chanthorn"
              unitPos="Cheif Central Point Unit"
              mowramPos="Deputy Chief Department"
              imgUrl={NoImageUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default MeteoUnit;
