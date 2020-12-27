import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon
} from "mdbreact";
import { RadioGroup, ReversedRadioButton } from "react-radio-buttons";
import { closeItemModal } from "../../redux/actions/selectedItem";
import { addCartItem } from "../../redux/actions/cart";

class ModalPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemMeta: null,
      toppingErrorMessage: "",
      baseErrorMessage: ""
    };
  }

  componentDidUpdate(prevprops) {
    if (prevprops.isShowModal === false && this.props.isShowModal === true) {
      const { id, name, isVeg, price, size, toppings } = this.props.modalData;
      const metaObject = {
        id,
        name,
        isVeg,
        price
      };
      const sizePreference = {};
      const toppingPreference = {};
      const [userSizePreference] = size;
      const [userToppingPreference] = toppings;
      if (!userSizePreference.isRadio) {
        userSizePreference.items.forEach(data => {
          sizePreference[data.size] = false;
        });
      }

      if (!userToppingPreference.isRadio) {
        userToppingPreference.items.forEach(data => {
          toppingPreference[data.name] = false;
        });
      }

      const toppingsList = userToppingPreference.items.map(data => {
        return data.name;
      });
      const sizeList = userSizePreference.items.map(data => {
        return data.size;
      });
      this.setState({
        itemMeta: metaObject,
        toppings: toppingPreference,
        size: sizePreference,
        sizeIsRadio: userSizePreference.isRadio,
        toppingIsRadio: userToppingPreference.isRadio,
        toppingsList,
        sizeList
      });
    }
  }

  setToppingSingle = value => {
    this.setState({
      toppings: { [value]: true }
    });
  };

  setToppingMultiple = value => {
    this.setState({
      toppings: { ...this.state.toppings, [value]: !this.state.toppings[value] }
    });
  };

  setSizeSingle = value => {
    this.setState({
      size: { [value]: true }
    });
  };

  setSizeMultiple = value => {
    this.setState({
      size: { ...this.state.size, [value]: !this.state.size[value] }
    });
  };

  handleAddToCart = () => {
    const { name, id, price, isVeg } = this.state.itemMeta;
    const { size, toppings } = this.state;
    const { closeModal, addItemToCart } = this.props;
    const cartObject = {
      name,
      id,
      isVeg,
      price,
      size: null,
      toppings: [],
      quantity: 1
    };
    for (let type in size) {
      if (size[type] === true) {
        cartObject.size = type;
      }
    }
    for (let topping in toppings) {
      if (toppings[topping] === true) {
        cartObject.toppings = [...cartObject.toppings, topping];
      }
    }
    if (cartObject.toppings.length < 1) {
      this.setState({
        toppingErrorMessage: "please select at least one topping"
      });
    } else if (cartObject.size === null) {
      this.setState({
        baseErrorMessage: "please select at least one base"
      });
    } else {
      addItemToCart(cartObject);
      closeModal();
    }
  };

  renderModalBody = () => {
    const { closeModal } = this.props;
    const { name, isVeg } = this.state.itemMeta;

    const {
      sizeIsRadio,
      toppingIsRadio,
      toppingsList,
      sizeList,
      toppingErrorMessage,
      baseErrorMessage
    } = this.state;
    return (
      <Fragment>
        <MDBModalHeader>
          <MDBIcon
            icon={`circle mb-2 mr-2 ${
              isVeg === true ? "green-text" : "red-text"
            }`}
          />
          {name}
        </MDBModalHeader>
        <MDBModalBody>
          <h4>choose topping(s)</h4>
          <p className="red-text">{toppingErrorMessage}</p>
          {toppingIsRadio ? (
            <RadioGroup onChange={value => this.setToppingSingle(value)}>
              {toppingsList.map(data => {
                return (
                  <ReversedRadioButton
                    value={data}
                    iconSize={20}
                    rootColor="black"
                    pointColor="green"
                    key={data}
                  >
                    {data}
                  </ReversedRadioButton>
                );
              })}
            </RadioGroup>
          ) : (
            toppingsList.map(data => {
              return (
                <div key={data}>
                  <input
                    type="checkbox"
                    id={"id"}
                    name={name}
                    value={"label"}
                    onChange={e => this.setToppingMultiple(data)}
                    checked={this.state.toppings[name]}
                  ></input>
                  <label className="ml-2">{data}</label>
                  <hr></hr>
                </div>
              );
            })
          )}
          <h4>choose size</h4>
          <p className="red-text">{baseErrorMessage}</p>
          {sizeIsRadio ? (
            <RadioGroup onChange={value => this.setSizeSingle(value)}>
              {sizeList.map(data => {
                return (
                  <ReversedRadioButton
                    value={data}
                    iconSize={20}
                    rootColor="black"
                    pointColor="green"
                    key={data}
                  >
                    {data}
                  </ReversedRadioButton>
                );
              })}
            </RadioGroup>
          ) : (
            sizeList.map(data => {
              return (
                <div key={data}>
                  <input
                    type="checkbox"
                    id={"id"}
                    name={name}
                    value={"label"}
                    onChange={e => this.setSizeMultiple(data)}
                    checked={this.state.toppings[name]}
                  ></input>
                  <label>{data}</label>
                </div>
              );
            })
          )}
        </MDBModalBody>

        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={closeModal}>
            Close
          </MDBBtn>
          <MDBBtn color="primary" onClick={this.handleAddToCart}>
            Add to Cart
          </MDBBtn>
        </MDBModalFooter>
      </Fragment>
    );
  };

  render() {
    const { itemMeta } = this.state;
    const { closeModal, isShowModal } = this.props;
    return (
      <MDBContainer>
        <MDBModal
          isOpen={isShowModal}
          toggle={closeModal}
          fullHeight
          position="right"
        >
          {itemMeta !== null && this.renderModalBody()}
        </MDBModal>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  const { customiseItem } = state;
  const { showModal, selected } = customiseItem;
  return {
    isShowModal: showModal,
    modalData: selected
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeItemModal()),
    addItemToCart: item => dispatch(addCartItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
