import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import PizzaApp from "./orderPizzaApp";
import Store from "./redux/store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
ReactDOM.render(
  <Provider store={Store}>
    <PizzaApp />
  </Provider>,
  document.getElementById("root")
);
