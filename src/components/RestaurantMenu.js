import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, areaName } =
    resInfo?.cards[2]?.card?.card?.info;
  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  return (
    <div className="container res-fex menu-page">
      <h3>{name}</h3>
      <div className="res-fex1">
        <div>
          <p>{cuisines.join(", ")}</p>
          <p>{costForTwoMessage}</p>
        </div>
        <div>
          <p>{avgRating}&#9733;</p>
          <p>{areaName}</p>
        </div>
      </div>
      <div>
        {/* <h4>{category}</h4> */}
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
