import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon
} from "mdbreact";

class NavbarPage extends Component {
  getCartItems = () => {
    const { cartData } = this.props;
    let cartItemsNumber = 0;
    if (Object.keys(cartData)) {
      for (let cartItem in cartData) {
        cartItemsNumber += cartData[cartItem].quantity;
      }
    }
    return cartItemsNumber;
  };
  render() {
    return (
      <MDBNavbar className="unique-color" expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/" className="white-text">
            <strong className="white-text">Pizza Store</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink to="/cart" className="white-text">
              <MDBIcon icon="shopping-cart" className="mr-3" />
              {this.getCartItems()}
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = state => {
  const { itemsInCart } = state;
  return {
    cartData: itemsInCart.cart
  };
};

export default connect(mapStateToProps, null)(NavbarPage);
