import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Routes from "./routes/routes";
// Css
import "./appLayout.scss";
class AppLayout extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div className="routeWrapper">
          <Routes />
        </div>
        <Footer />
      </Router>
    );
  }
}

export default AppLayout;
