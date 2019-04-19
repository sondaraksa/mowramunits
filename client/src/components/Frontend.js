import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Landing from "./layout/Landing";
import Footer from "./layout/Footer";
import FooterContainer from "./layout/FooterContainer";

import DirectorMessage from "./aboutus/DirectorMessage";
import AboutUs from "./aboutus/AboutUs";
import Profile from "./aboutus/Profile";
import News from "./news/News";
import Login from "./auth/Login";
import NewsDetail from "./news/NewsDetail";

class FrontEndLayout extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/director-message" component={DirectorMessage} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/1" component={NewsDetail} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <FooterContainer />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default FrontEndLayout;
