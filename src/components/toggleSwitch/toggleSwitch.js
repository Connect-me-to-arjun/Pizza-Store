import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import Switch from "react-switch";
// Switch color constants
import {
  on_color,
  off_color,
  Off_ring_color,
  On_ring_color
} from "./toggleSwitchColors";
// Actions
import {
  setFilteredData,
  gettAllMenuItems
} from "../../redux/actions/allItems";

class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevprops, prevstate) {
    const { itemList, setOnlyVeg, getAllItems } = this.props;
    let filteredbasedOnVeg = [];
    if (
      prevstate.checked !== this.state.checked &&
      this.state.checked === true
    ) {
      filteredbasedOnVeg = itemList.filter(item => {
        return item.isVeg !== false;
      });
      setOnlyVeg(filteredbasedOnVeg);
    } else if (
      prevstate.checked !== this.state.checked &&
      this.state.checked === false
    ) {
      getAllItems();
    }
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <Switch
        checked={this.state.checked}
        onChange={this.handleChange}
        onColor={on_color}
        offColor={off_color}
        onHandleColor={On_ring_color}
        offHandleColor={Off_ring_color}
        handleDiameter={22}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 4px rgba(0, 0, 0, 0.6)"
        height={14}
        width={38}
        className="react-switch"
        id="material-switch"
      />
    );
  }
}

const mapStateToProps = state => {
  const { items } = state.allItems;
  return {
    itemList: items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setOnlyVeg: data => dispatch(setFilteredData(data)),
    getAllItems: () => dispatch(gettAllMenuItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleSwitch);
