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
              mowramPos="Deputy Chief Department / MOWRAM"
              imgUrl={NoImageUrl}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <CardItems
              id="1"
              name="Mr.Lim Pitou"
              unitPos="Member"
              mowramPos="Deputy Chief Office / MOWRAM"
              imgUrl="lim_pitou.jpg"
            />
          </div>
          <div className="col-md-3">
            <CardItems
              id="1"
              name="Mr.Kang Chansometh"
              unitPos="Member"
              mowramPos="Deputy Chief Office / MOWRAM"
              imgUrl="kang_chansometh.jpg"
            />
          </div>
          <div className="col-md-3">
            <CardItems
              id="1"
              name="Mr.Kang Sovichea"
              unitPos="Member"
              mowramPos="Deputy Chief Office / MOWRAM"
              imgUrl="kang_sovichea.jpg"
            />
          </div>
          <div className="col-md-3">
            <CardItems
              id="1"
              name="Mr.Long Vichea"
              unitPos="Member"
              mowramPos="Deputy Chief Office / MOWRAM"
              imgUrl="long_vichea.jpg"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default CentralpointUnit;
