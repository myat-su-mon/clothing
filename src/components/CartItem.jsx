import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

const CartItem = ({item}) => {
  return (
    <div className="flex text-base-content border-base-300 border-y my-5 py-5 justify-between">
      <div className="img-container shadow-lg ">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1315&q=80"
          className="w-32 h-32"
        />
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mx-5">
        {/* <h4 className="tracking-wide">{cartItem.title}</h4>
        <h4>{cartItem.price}</h4> */}
      </div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mx-5">
        <div className="flex justify-end">
          <CloseIcon className='delete'/>
        </div>
        <div className="add-to-cart flex gap-2 ">
          <button className="btn-no-outline ">-</button>
          <span className="self-center">1</span>
          <button className="btn-no-outline">+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem