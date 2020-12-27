import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import CartCard from "../cartCards/cartCards";
class cartCardList extends Component {
  render() {
    const { cartList } = this.props;
    let cartData = [];
    if (Object.keys(cartList)) {
      for (let item in cartList) {
        cartData.push(cartList[item]);
      }
    }
    return (
      <div>
        {cartData.length ? (
          cartData.map(data => {
            return <CartCard key={data.id} {...data} />;
          })
        ) : (
          <h1>No Items in cart</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { itemsInCart } = state;
  const { cart } = itemsInCart;
  return {
    cartList: cart
  };
};

export default connect(mapStateToProps, null)(cartCardList);
