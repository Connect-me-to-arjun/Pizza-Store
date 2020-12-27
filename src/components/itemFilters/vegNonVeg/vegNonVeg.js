import React, { Component } from "react";
import { MDBCardText } from "mdbreact";
import ToggleSwitch from "../../toggleSwitch/toggleSwitch";
import "./vegNonVeg.scss";

class vegNonVeg extends Component {
  render() {
    return (
      <div className="foodChoice">
        <MDBCardText className="mr-2">
          <span>Veg Only</span>
        </MDBCardText>
        <ToggleSwitch />
      </div>
    );
  }
}

export default vegNonVeg;
