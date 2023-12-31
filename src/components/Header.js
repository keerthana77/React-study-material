import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    //Subscribing to the store using selector
    const selector = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between bg-purple-200 shadow-lg px-4">
            <div className="logo-container">
                <img className="w-20 logo" src={LOGO_URL} />
            </div>
            <div className="flex items-center ">
                <ul className="flex gap-7">
                    <li>Online Status: {onlineStatus? '🟢': '🔴'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li className="font-bold"><Link to="/cart">🛒({selector.length} items)</Link></li>
                    <button className="login" onClick={() => btnName === 'Login'? setBtnName('Logout'): setBtnName('Login')}>{btnName}</button>
                    <li className="font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;