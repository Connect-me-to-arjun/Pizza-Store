import React from 'react';
// components
import VegNonVeg from "./vegNonVeg/vegNonVeg";
import Sort from "./sort";
// css
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