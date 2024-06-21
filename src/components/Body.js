import restaurantList from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState(restaurantList);
  const [filtered, setFiltered] = useState(false);

  const toggleFilter = () => {
    if (filtered) {
      setListofRestaurants(
        restaurantList.filter((res) => res.data.avgRating > 4)
      );
    } else {
      setListofRestaurants(restaurantList);
    }
    setFiltered(!filtered);
  };

  return (
    <div className="body">
      <div className="filter">
        <button type="filter-btn" onClick={toggleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-list">
        {listofRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
