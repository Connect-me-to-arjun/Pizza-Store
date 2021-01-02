import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
// Components
import CardList from "../../components/cardsList/CardsList";
import ItemFilters from "../../components/itemFilters/itemFilters";
import CustomiseItem from "../../components/customiseItem/customiseItem";
// Actions
import {
  gettAllMenuItems,
  setSearchedData
} from "../../redux/actions/allItems";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      searchError: false
    };
  }
  componentDidMount() {
    const { getItems } = this.props;
    getItems();
  }
  componentDidUpdate(prevprops, prevstate) {
    const { itemsList, setSearch } = this.props;
    const { searchString } = this.state;
    let filteredBasedOnSearch = [];
    if (prevstate.searchString !== searchString) {
      if (searchString.length) {
        filteredBasedOnSearch = itemsList.filter(item => {
          if (
            item.name
              .toLocaleLowerCase()
              .startsWith(searchString.toLocaleLowerCase())
          ) {
            return item;
          } else return null;
        });
        if (!filteredBasedOnSearch.length) {
          this.setState({ searchError: true });
        }
      } else this.setState({ searchError: false });
      setSearch(filteredBasedOnSearch);
    }
  }
  setSearchString = e => {
    this.setState({
      searchString: e.target.value
    });
  };
  render() {
    const { itemsList, searchFiltered } = this.props;
    const { searchString, searchError } = this.state;
    return (
      <Fragment>
        <ItemFilters />
        <label>Search</label>
        <input
          type="text"
          value={searchString}
          onChange={e => this.setSearchString(e)}
        />
        {searchFiltered.length > 0 && !searchError ? (
          <CardList data={searchFiltered} />
        ) : searchError ? (
          <h1>No Data Found</h1>
        ) : (
          itemsList.length > 0 && <CardList data={itemsList} />
        )}
        {/* {itemsList.length > 0 && <CardList data={itemsList} />} */}
        <CustomiseItem />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { allItems } = state;
  const { items, searchFiltered } = allItems;
  return {
    itemsList: items,
    searchFiltered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(gettAllMenuItems()),
    setSearch: data => dispatch(setSearchedData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(home);
