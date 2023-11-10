import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;

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
        </div>
    )
}

export default RestaurantCard;