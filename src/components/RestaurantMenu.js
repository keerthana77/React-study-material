import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export default function RestaurantMenu() {
    const [data, setData] = useState(null);

    async function fetchMenu() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.93829619947158&lng=80.14404561370611&restaurantId=37642&catalog_qa=undefined&submitAction=ENTER");
        const json = await response.json();
        setData(json.data)
    }

    useEffect(() => {
        fetchMenu();
    },[])
    
    if(data == null) {
        return <Shimmer />;
    }
    const { name, cuisines, costForTwoMessage, cloudinaryImageId } = data?.cards[0]?.card?.card?.info;
    const { itemCards } = data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards)
   return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
            <ul>
                <li>Salad</li>
                <li>Sprouts</li>
                <li>Smoothie</li>
            </ul>
        </div>
    )    
}