import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [data, setData] = useState([]);
    function filterButton() {
        const filtered = data.filter(d => d.data.avgRating > 4);
        setData(filtered);
    }

    async function fetchData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93829619947158&lng=80.14404561370611&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json)
        setData(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    useEffect(() => {
        fetchData();
    }, [])

    if(data.length === 0) {
        return <>Loading...</>
    }

    return (
        <div className="body">
            <button className="filter-btn" onClick={() => filterButton()}>Top Rated Restaurants</button>
            <div className="res-container">
                {data?.map(d => {
                    console.log(d?.info)
                    return <RestaurantCard key={d?.info?.id} resData = {d}/>
                })}
            </div>
        </div>
    )
}

export default Body;