import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Landing from "./components/layout/Landing";
import DirectorMessage from "./components/aboutus/DirectorMessage";
import AboutUs from "./components/aboutus/AboutUs";
import Profile from "./components/aboutus/Profile";

import Articles from "./components/articles/Articles";
import Article from "./components/article/Article";

// import Frontend from "./components/Frontend";
import Backend from "./components/Backend";
import Login from "./components/auth/Login";
import "./App.css";
import "./css/simple-sidebar.css";
import "./js/myjs";

//Check for Token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());
    // clear current profile
    //store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Landing} />
            <Route exact path="/director-message" component={DirectorMessage} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/articles/:id" component={Article} />
            {/* <Route exact path="/articles/1" component={ArticleDetail} /> */}
            <PrivateRoute path="/admin" component={Backend} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
