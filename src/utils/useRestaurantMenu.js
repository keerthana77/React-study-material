import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

export default function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState(null);

    async function fetchData() {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    useEffect(() => {
        fetchData()
    }, [])

    return resInfo;
}