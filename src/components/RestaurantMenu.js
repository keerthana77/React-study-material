import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

export default function RestaurantMenu() {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(0);

    if (resInfo == null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    // function getItemsCards() {
    //     if (Object.keys(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card.card).includes('itemCards')) {
    //         return resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[0].card.card
    //     } else if (Object.keys(resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card).includes('itemCards')) {
    //         return resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //     }
    // }

    // const { itemCards } = getItemsCards();
    const categories = resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(c => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (
        <div className="menu text-center">
            <h1 className="p-3 font-bold">{name}</h1>
            <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
            {categories.map((d,index) => {
                return <RestaurantCategory key={d.card.card.title} data={d.card.card} setShowIndex={() => showIndex === index ? setShowIndex(null) : setShowIndex(index)} showItems={showIndex === index} />
            })}
        </div>
    )
}