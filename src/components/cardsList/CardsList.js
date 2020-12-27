import React from "react";
// Components
import ItemCard from "../itemCard/itemCard";

const CardsList = props => {
  const { data } = props;
  return (
    <div className="itemCardList">
      {data.map(item => {
        return <ItemCard cardMeta={item} key={item.id} />;
      })}
    </div>
  );
};

export default CardsList;
