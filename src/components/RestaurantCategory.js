import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const handleShowItems = () => {
    //lifting state up, this function is coming from the parent.
    const newIndex = showItems === index ? null : index;
    setShowIndex(newIndex);
    setShowIndex();
  };

  return (
    <div className="mx-auto my-4 bg-gray-100 shadow-lg p-4">
      {/*Accordian Header*/}
      <div
        onClick={() => handleShowItems()}
        className="flex flex-wrap justify-between"
      >
        <span className="text-black text-left font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>

      {/*Accordian Body*/}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
