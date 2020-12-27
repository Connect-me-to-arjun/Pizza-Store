import React, { Component } from "react";
import { connect } from "react-redux";
// Actions
import { incrementCart, decrementCart } from "../../redux/actions/cart";
// Css
import "./modifyQuantity.scss";
class modifyQuantity extends Component {
  incrementQuantity = () => {
    const { id } = this.props.itemData;
    this.props.addMore(id);
  };

  decrementQuantity = () => {
    const { id } = this.props.itemData;
    this.props.remove(id);
  };
  render() {
    const { quantity } = this.props.itemData;
    return (
      <div className="text-center white-text">
        <div className="modifyQuantity">
          <div
            className={`removeQuantity ${quantity < 2 && "disabled"}`}
            onClick={this.decrementQuantity}
          >
            &#x02013;
          </div>
          <div className="Quantity">{quantity}</div>
          <div className="addQuantity" onClick={this.incrementQuantity}>
            &#x0002B;
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMore: id => dispatch(incrementCart(id)),
    remove: id => dispatch(decrementCart(id))
  };
};

export default connect(null, mapDispatchToProps)(modifyQuantity);
