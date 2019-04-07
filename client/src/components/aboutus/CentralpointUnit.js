import React, { Component } from "react";
import CardItems from "./CardItems";

class CentralpointUnit extends Component {
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
          <div className="col-md-3">
            <CardItems
              id="1"
              name="Mr.Kang Chanthorn"
              unitPos="Cheif Central Point Unit"
              mowramPos="Deputy Chief Department"
              imgUrl={NoImageUrl}
            />
          </div>
          <div className="col-md-3">
            <CardItems
              id="1"
              name="Mr.Kang Chanthorn"
              unitPos="Cheif Central Point Unit"
              mowramPos="Deputy Chief Department"
              imgUrl={NoImageUrl}
            />
          </div>
          <div className="col-md-3">
            <CardItems
              id="1"
              name="Mr.Kang Chanthorn"
              unitPos="Cheif Central Point Unit"
              mowramPos="Deputy Chief Department"
              imgUrl={NoImageUrl}
            />
          </div>
          <div className="col-md-3">
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
export default CentralpointUnit;
