import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime  } = resData?.info;

    return (
        <div className="res-card">
            <div className="res-logo">
            <img src={CDN_URL + cloudinaryImageId} />
            </div>
            <h4>{name}</h4>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>${costForTwo/ 1000} FOR TWO</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
}

export default RestaurantCard;