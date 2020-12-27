import React from "react";
// Components
import VegNonVeg from "./vegNonVeg/vegNonVeg";
import Sort from "./sort/sort";
// Css
import "./itemFilters.scss";

const itemFilters = () => {
  return (
    <div className="pageFilters">
      <VegNonVeg />
      <Sort />
    </div>
  );
};

export default itemFilters;
