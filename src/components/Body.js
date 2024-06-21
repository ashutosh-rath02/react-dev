import restaurantList from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState(restaurantList);
  const [filtered, setFiltered] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] =
    useState(restaurantList);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.25318665808527&lng=84.90334937367797&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const jsonData = data.json();
  //   console.log(jsonData);
  // };

  const toggleFilter = () => {
    if (filtered) {
      setFilteredRestaurants(
        restaurantList.filter((res) => res.data.avgRating > 4)
      );
    } else {
      setFilteredRestaurants(restaurantList);
    }
    setFiltered(!filtered);
  };

  const handleSearch = () => {
    const filteredData = listofRestaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredData);
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          // update the state variable searchText when we typing in input box
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <button type="button" className="filter-btn" onClick={toggleFilter}>
        Top Rated Restaurants
      </button>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
