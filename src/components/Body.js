import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    function filterButton() {
        const filtered = data.filter(d => d.info.avgRating > 4);
        setData(filtered);
    }

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93829619947158&lng=80.14404561370611&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(onlineStatus === false) return <h2>No internet connection. Please check your connection!!</h2>  
    /** Conditional rendering */

    return data?.length === 0 ? <Shimmer /> : (
        <div className="body p-4 bg-purple-50">
            <div className="filter flex">
                <div className="search">
                    <input type="text" className="input-search border py-1 border-solid border-black" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="px-4 py-2 bg-green-200" onClick={() => {
                        const filtered = data.filter(d => d.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredData(filtered);
                    }}>Search</button>
                </div>
                <button className="px-4 py-2 bg-green-200 filter-btn" onClick={() => filterButton()}>Filter</button>
            </div>

            <div className="res-container">
                {filteredData?.map(d => {
                    return <Link key={d?.info?.id} to={`/restaurants/${d?.info?.id}`} className="rounded-lg bg-white"><RestaurantCard resData={d} /></Link>
                })}
            </div>
        </div>
    )
}

export default Body;