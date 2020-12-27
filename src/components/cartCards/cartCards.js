import React, { Component } from "react";
// Components
import { MDBCardTitle, MDBCardText, MDBIcon } from "mdbreact";
import ModifyQuantity from "../modifyQuantity/modifyQuantity";
// Css
import "./cartCards.scss";
class cartCards extends Component {
  getToppingsList = () => {
    const { toppings } = this.props;
    let toppingsString = "";
    toppings.forEach((topping, index) => {
      toppingsString += `${index === 0 ? topping : `, ${topping}`}`;
    });
    return toppingsString;
  };
  render() {
    const { name, price, size, isVeg } = this.props;

    return (
      <div className="cartCard">
        <div className="cardDetails">
          <MDBIcon
            icon={`circle mb-2 ${isVeg === true ? "green-text" : "red-text"}`}
          />
          <MDBCardTitle className="itemCardTitle cartCardMeta">
            {name}
          </MDBCardTitle>
          <MDBCardText className="cartCardMeta">Size - {size}</MDBCardText>
          <MDBCardText className="cartCardMeta">
            Toppings - {this.getToppingsList()}
          </MDBCardText>
          <MDBCardText className="cartCardMeta">
            Price - &#8377;{price}
          </MDBCardText>
        </div>
        <div className="modifycart">
          <ModifyQuantity itemData={this.props} />
        </div>
      </div>
    );
  }
}

export default cartCards;
