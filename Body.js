import RestaurantCard from "./RestaurantCard";
//import resList from "./mockData";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {

  const [searchText, setsearchText] = useState("");

  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  
  const [filteredRestaurant, setfilteredRestaurant] = useState([])

  useEffect(() => {
    fetchData();
    //console.log("useEffect called");
  }, []);

  const fetchData = async () => {                                                                             
    const data = fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurant);
    setfilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurant);
  };


  /*const listOfRest = [{
    "info": {
      "id": "435686",
      "name": "Pizza Hut",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "locality": "South Chd",
      "areaName": "Sector 26",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 4.3,
      "parentId": "721",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 2.6,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "2.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
  },

  "info": {
    "id": "4356861",
    "name": "izza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "South Chd",
    "areaName": "Sector 26",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Pizzas"
    ],
    "avgRating": 4.3,
    "parentId": "721",
    "avgRatingString": "4.3",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 46,
      "lastMileTravel": 2.6,
      "serviceability": "SERVICEABLE",
      "slaString": "45-50 mins",
      "lastMileTravelString": "2.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
},
  }]*/

    return listOfRestaurants.length == 0 ? (<Shimmer/> ) :  (
        <div className="body">
            <div className="filter">
              <div className="search" >
                <input type="text" 
                className="search-box" 
                value={searchText} 
                onChange={(e) => {
                  searchText(e.target.value);
                }} />
                <button onClick={() =>{
                  const filteredRestaurant = listOfRestaurants.filter(
                    (res)=> res.data.name.toLowerCase().includes(searchText.toLocaleLowerCase()));

                    setfilteredRestaurant(filteredRestaurant);

                }}>Search</button>
              </div>
                <button className="filter-btn" 
                  onClick={ () => {

                    //console.log("Button Clicked")
                    const filteredList = listOfRestaurants.filter(
                      (res) = res.info.avgRating > 4
                    );
                    setlistOfRestaurants(filteredList);

                    }}>
                  Top Rated Restaurants
                </button>
            </div>
            <div className="restaurant-container">
                {
                    filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>
                    ))
                }

            </div>
        </div>
    );
};

export default Body;