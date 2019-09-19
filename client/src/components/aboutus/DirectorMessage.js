import React, { Component } from "react";
import DirectorPic from "../../img/director.jpg";

import NavBar from "../layout/Navbar";
import FooterContainer from "../layout/FooterContainer";
import Footer from "../layout/Footer";

class DirectorMessage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="director-message">
          <div className="container">
            <div className="row">
              <div className="cal-md-12">
                <div className="row">
                  <div className="col-lg-4 text-center">
                    <img
                      src={DirectorPic}
                      className="ImageArticleText"
                      alt="director"
                    />
                  </div>

                  <div className="col-lg-8">
                    <h1 className="text-center">MINISTER'S MESSAGE</h1>
                    <p className="text-justify">
                      Greetings in Peace!! I am pleased to inform everyone that
                      the Royal government of Cambodia, through the Ministry of
                      Water Resources and Meteorology (MOWRAM) has obtained a
                      loan from the Asian Development Bank (ADB) to finance the
                      implementation of the Uplands Irrigation and Water
                      Resources Management Sector Project (UIWRMSP). This
                      project complements our government’s strategy to enhance
                      economic growth through the rehabilitation and development
                      of approximately 29,500 hectares of existing irrigation
                      schemes within the provinces of Kampong Thom and
                      Battambang.
                    </p>
                    <p className="text-justify">
                      Focusing on its major outputs, the UIWRMSP aims to achieve
                      enhanced efficiency and climate resilience of irrigation
                      systems through rehabilitation, modernization and
                      climate-proofing of at least three irrigation systems in
                      the project sites. More importantly, the project intends
                      to build a strong and functional Farmer Water-Users
                      Communities who will take the lead role in the operations
                      and maintenance of these irrigation systems.
                    </p>
                    <p className="text-justify">
                      It is also important to note that the Cambodian
                      Agricultural Sector is one of the biggest contributors in
                      the country’s economy particularly in rice production.
                      Hence, the UIWRMSP is a good strategy for us to alleviate
                      farmers from poverty through increased agricultural
                      production and profitability as the project.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <p className="text-justify">
                    It is our pride that we have received this unprecedented
                    opportunity to improve our economy especially in
                    agricultural production. MOWRAM as the executing agency of
                    this project recognizes the importance of partnership with
                    various stakeholdersto realize the project goals. It is in
                    this spirit that we encourage all line Ministries and other
                    concerned sectors to join and support us in realizing a
                    better society for our countrymen.
                  </p>
                  <p className="text-justify">In the service of our people,</p>
                </div>
                <div className="row">
                  <span>
                    <h5 className="text-center">HE. Lim Keanhor</h5>
                  </span>
                </div>
                <div className="row">
                  <span>
                    <h5 className="text-center">Minister</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterContainer />
        <Footer />
      </div>
    );
  }
}
export default DirectorMessage;
