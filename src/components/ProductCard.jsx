import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="card w-auto h-80 bg-base-100 shadow-xl rounded-none">
      <figure>
        <Link className="link" to={`/productDetail/${product?.id}`}>
          <img src={product?.image} className="h-60 w-60" />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-normal">{product?.title}</h2>
        <div className="card-actions justify-between">
          <span>KS {product?.price}</span>
          <button
            className="add border-solid border-2 border-[#1C2E3D]"
            onClick={() =>
              dispatch(addToCart({ ...product, qty: 1, size: "M" }))
            }
          >
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
