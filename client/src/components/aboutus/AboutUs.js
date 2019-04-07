import React, { Component } from "react";
import PicTeam from "../../img/showcase.jpg";
import CardItems from "./CardItems";
import CentralpointUnit from "./CentralpointUnit";
import MeteoUnit from "./MeteoUnit";
import InformationUnit from "./InformationUnit";

class AboutUs extends Component {
  render() {
    return (
      <div className="who-we-are">
        <div className="container">
          <div className="row">
            <div className="cal-md-12">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <img
                    src={PicTeam}
                    className="ImageArticleText"
                    alt="PicTeam"
                  />
                </div>

                <div className="col-lg-8">
                  <h1 className="text-left">WHO WE ARE</h1>
                  <p className="text-justify">
                    The mandate of the Royal Government of Cambodia policy
                    framework continues to execute water policy to perform water
                    resources management by preserving and rehabilitating small,
                    medium, and large scale irrigation system from 16.62% to
                    20%. While the carrying capacity of irrigate water would be
                    increase from 3.32% to 4% annually for agricultural land in
                    5 years (1998-2003) plan, irrigated water system for
                    agriculture would be increase up to 374.603ha. With the
                    framework of evolving policy context, the General Department
                    of Irrigation, Meteorology, and Hydrology has upgraded the
                    capacity to become a Ministry of Water Resources and
                    Meteorology (MOWRAM) by Proclamation No., NS/RKM/0699108,
                    dated on June 23rd, 1999. Within a mandate to lead and
                    manage Water Resources and Meteorology sector of the Royal
                    Government of Cambodia. Since this requires some
                    restructuring of the Ministry, to realign its structure to
                    better reflect policy set for the next five years.
                  </p>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1>Mowram Teachnical Units</h1>
                  <p className="text-justify">
                    Project Management Unit (PMU) – Ministry of Water Resources
                    and Meteorology (MOWRAM) serves as the Executing Agency
                    supervising and guiding the overall of project management.
                    Department of Farmer Water User Community (DFWUC) serves as
                    the Implementing Agency. To ensure the project well
                    implemented with good results, a Project Management Unit
                    (PMU) was established in DFWUC and headed by a Project
                    Director, currently as Deputy Director General for Technical
                    Affairs. PMU is responsible for implementation, planning,
                    organization, monitoring and reporting of the project and is
                    supported by the project management and implementation
                    consultants (PMIC). PMU consists of 24 designated personnel
                    from Ministry of Water Resources Management and Meteorology
                    (MOWRAM), Ministry of Agriculture, Forestry and Fisheries
                    (MAFF). Project Management and Implementation Consultants
                    (PMIC)- The PMIC consists of 64 person-months of
                    International and 610 person-months of National experts to
                    provide technical support to the PMU in efficient management
                    and implementation of the project.
                  </p>
                </div>
              </div>
              <hr />
              <h1 className="text-center">Units Hierarchy</h1>
              <br />
              <div className="row">
                <div className="col-lg-12 text-center">
                  <CardItems
                    id="1"
                    name="Mr.Lim Canberra"
                    unitPos="Units Director"
                    mowramPos="Deputy Director General for Administration Affair / MOWRAM "
                    imgUrl="berra_lim.jpg"
                  />
                </div>
              </div>
              <hr />
              <h3 className="text-center">Central Point Unit</h3>
              <br />
              <CentralpointUnit />
              <hr />
              <h3 className="text-center">Meteorology and Radar Unit</h3>
              <br />
              <MeteoUnit />
              <hr />
              <h3 className="text-center">Hydrology Unit</h3>
              <br />
              <MeteoUnit />
              <hr />
              <h3 className="text-center">Remote Sensing and Mapping Unit</h3>
              <br />
              <MeteoUnit />
              <hr />
              <h3 className="text-center">Database Unit</h3>
              <br />
              <MeteoUnit />
              <hr />
              <h3 className="text-center">Information and Broadcasting Unit</h3>
              <br />
              <InformationUnit />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
