import React, { Component } from "react";
import { connect } from "react-redux";
// Components
import Select from "react-select";
import { MDBCardText } from "mdbreact";
// Actions
import {
  setFilteredData,
  gettAllMenuItems
} from "../../../redux/actions/allItems";
// Css
import "./sort.scss";
// Sort Config
const options = [
  { value: "relevence", label: "Relevence" },
  { value: "price", label: "Price High to Low" },
  { value: "priceLow", label: "Price Low to High" },
  { value: "rating", label: "Rating High to Low" },
  { value: "ratingLow", label: "Rating Low to High" }
];

class Sort extends Component {
  state = {
    selectedOption: { value: "relevence", label: "Relevence" }
  };

  componentDidUpdate(prevprops, prevstate) {
    const { label, value } = this.state.selectedOption;
    const { itemList, sortData } = this.props;
    let filteredData = [];
    if (prevstate.selectedOption.value !== value) {
      switch (label) {
        case "Price High to Low":
          filteredData = itemList.sort((a, b) =>
            a[value] > b[value] ? -1 : 1
          );
          break;
        case "Price Low to High":
          filteredData = itemList.sort((a, b) => (a.price > b.price ? 1 : -1));
          break;
        case "Rating High to Low":
          filteredData = itemList.sort((a, b) =>
            a[value] > b[value] ? -1 : 1
          );
          break;
        case "Rating Low to High":
          filteredData = itemList.sort((a, b) =>
            a.rating > b.rating ? 1 : -1
          );
          break;
        default:
          this.props.getAllItems();
      }
      if (filteredData.length > 0) {
        sortData(filteredData);
      }
    }
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="sortFilter">
        <MDBCardText className="mr-2">
          <span>Sort</span>
        </MDBCardText>
        <div className="sortingDrop">
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
        </div>
      </div>
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
    sortData: data => dispatch(setFilteredData(data)),
    getAllItems: () => dispatch(gettAllMenuItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
