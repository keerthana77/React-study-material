import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

export default function Cart() {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    function handleClearCart() {
        dispatch(clearCart())
    }

    return (
        <div className="text-center p-10 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto p-3">
                <button className="px-4 bg-black text-white" onClick={() => handleClearCart()}>Clear</button>
                {cartItems.length === 0 && <h1 className="pt-2">Cart is empty. Add items to the cart!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}