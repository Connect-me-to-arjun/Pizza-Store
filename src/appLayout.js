import React, { Component } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/routes";
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
