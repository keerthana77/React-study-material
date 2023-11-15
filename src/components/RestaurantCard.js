import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="res-card ">
            <div className="res-logo ">
                <img src={CDN_URL + cloudinaryImageId} className="rounded-lg" />
            </div>
            <h4 className="font-bold">{name}</h4>
            <h5 className="font-normal">{cuisines.join(",")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>${costForTwo}</h5>
            <h5>{sla.deliveryTime} minutes</h5>
            <h4>User: {loggedInUser}</h4>
        </div>
    )
}

/**Higher order component */
/** Input - RestaurantCard => output => RestaurantCard with Veg  */

export function withVegLabel(RestaurantCard) {
    return(props) => {
        return (
            <div>
                <label className="absolute bg-black text-white px-2">Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;