import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const MENU_API =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9265132&lng=77.63615519999999&restaurantId=";
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating, areaName } =
    resInfo?.cards[2]?.card?.card?.info;
  // const { name } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //     ?.itemCards?.card?.info;
  // const { slaString } = resInfo?.cards[0]?.card?.card?.info?.sla;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // const { category } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
  //     ?.itemCards[0]?.card?.info;
  // console.log(itemCards)
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
          {itemCards.map((item) => (
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
