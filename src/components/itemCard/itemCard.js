import React, { Component } from "react";
import { connect } from "react-redux";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBIcon
} from "mdbreact";
import ModifyQuantity from "../modifyQuantity/modifyQuantity";
// Action
import { setSelectedItem } from "../../redux/actions/selectedItem";
import "./itemCard.scss";

class Cards extends Component {
  handleAddClick = () => {
    const { cardMeta, setItem } = this.props;
    setItem(cardMeta);
  };

  checkIfItemExistsInCart = () => {
    const { cartsList } = this.props;
    const { id } = this.props.cardMeta;
    let cardBelowContent = null;
    if (cartsList[id] !== undefined) {
      cardBelowContent = <ModifyQuantity itemData={cartsList[id]} />;
    } else
      cardBelowContent = (
        <div className="text-center addButtonWrapper">
          <MDBBtn className="addButton" onClick={this.handleAddClick}>
            Add
          </MDBBtn>
        </div>
      );
    return cardBelowContent;
  };

  render() {
    const {
      description,
      img_url,
      isVeg,
      name,
      price,
      rating
    } = this.props.cardMeta;
    return (
      <MDBCard className="itemCard">
        <MDBCardImage className="img-fluid itemImage" src={img_url} waves />
        <MDBCardBody className="itemCardBody">
          <MDBIcon
            icon={`circle mb-2 ${isVeg === true ? "green-text" : "red-text"}`}
          />
          <MDBCardTitle className="itemCardTitle">{name}</MDBCardTitle>
          <MDBCardText className="itemCardRating">
            {rating}
            <MDBIcon icon="star" className="ml-1 amber-text pr-3" />
          </MDBCardText>
          <MDBCardText className="itemCardDescription">
            &#8377;{price}/-
          </MDBCardText>
          <MDBCardText className="itemCardDescription">
            {description}
          </MDBCardText>
          {this.checkIfItemExistsInCart()}
        </MDBCardBody>
      </MDBCard>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setItem: data => dispatch(setSelectedItem(data))
  };
};

const mapStateToProps = state => {
  const { itemsInCart } = state;
  const { cart } = itemsInCart;
  return {
    cartsList: cart
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
