import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty, removeFromCart } from "../redux/cartReducer";
import { sizes } from "../data/data";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex text-base-content border-base-300 border-y my-5 py-5 gap-5">
      <div className="w-[30%]">
        <img src={item.image} className="w-32 h-32 shadow-md" />
      </div>
      <div className="flex w-[70%] justify-between relative align-middle">
        <h4 className="tracking-wide">{item.title}</h4>
        {/* {
          item.size?.map(size => (
            <button key={size.id} className="btn-outline">{size}</button>
          ))
        } */}
        <div className="qty flex gap-2">
          <button
            className="btn-no-outline"
            onClick={() => dispatch(decreaseQty(item.id))}
          >
            -
          </button>
          <span className="my-auto">{item.qty}</span>
          <button
            className="btn-no-outline"
            onClick={() => dispatch(increaseQty(item.id))}
          >
            +
          </button>
        </div>
        <div className="sub">
          <p>{item.qty * item.price} </p>
        </div>
        <div>
          <CloseIcon
            className="delete absolute top-0 right-0"
            onClick={() => dispatch(removeFromCart(item.id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
