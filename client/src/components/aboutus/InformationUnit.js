import React, { Component } from "react";
import CardItems from "./CardItems";

class InformationUnit extends Component {
  render() {
    const NoImageUrl = "no_avatar.png";
    return (
      <div className="row">
        <div className="col-lg-12 text-center">
          <CardItems
            id="1"
            name="Mr.Kan Vannak"
            unitPos="Cheif Central Point Unit"
            mowramPos="Deputy Chief Department"
            imgUrl={NoImageUrl}
          />
        </div>
        <div className="col-sm-6">
          <CardItems
            id="1"
            name="Mr.Kang Chanthorn"
            unitPos="Cheif Central Point Unit"
            mowramPos="Deputy Chief Department"
            imgUrl={NoImageUrl}
          />
        </div>
        <div className="col-sm-6">
          <CardItems
            id="1"
            name="Mr.Kang Chanthorn"
            unitPos="Cheif Central Point Unit"
            mowramPos="Deputy Chief Department"
            imgUrl={NoImageUrl}
          />
        </div>
      </div>
    );
  }
}
export default InformationUnit;
