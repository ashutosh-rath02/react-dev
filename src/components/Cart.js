import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  // bellow code is less efficient way to subscribe to store, it will subscribe to all slices in store
  // always subscribe to small element of store, subscribe to small element of store
  //   const store = useSelector((store) => store);
  //   const cartItems = store.cart.items;
  console.log("cartItemsCart", cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
        {!cartItems?.length && <h1>Cart is empty. Add items to the cart</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
