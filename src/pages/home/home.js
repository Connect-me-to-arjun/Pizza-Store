import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { gettAllMenuItems } from "../../redux/actions/allItems";
import CardList from "../../components/cardsList/CardsList";
import ItemFilters from "../../components/itemFilters/itemFilters";
import CustomiseItem from "../../components/customiseItem/customiseItem";
class home extends Component {
  componentDidMount() {
    const { getItems } = this.props;
    getItems();
  }
  render() {
    const { itemsList } = this.props;
    return (
      <Fragment>
        <ItemFilters />
        {itemsList.length > 0 && <CardList data={itemsList} />}
        <CustomiseItem />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { allItems } = state;
  const { items } = allItems;
  return {
    itemsList: items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(gettAllMenuItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
