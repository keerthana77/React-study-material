import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurantMenu() {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo == null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    function getItemsCards() {
        if(Object.keys(data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card).includes('itemCards')) {
            return data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        } else if(Object.keys(data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card).includes('itemCards')) {
            return data?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        }
    }

    const { itemCards } = getItemsCards();

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')} - {costForTwoMessage}</h3>
            <ul>
                {itemCards.map(d => {
                    return <li key={d.card.info.id}>{d.card.info.name} - Rs.{d.card.info.price /100}</li>
                })}
            </ul>
        </div>
    )
}