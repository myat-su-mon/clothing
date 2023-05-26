import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  // const {data, loading, error} = useFetch('/products/${id}?populate=*');

  return (
    <div className="card w-auto h-80 bg-base-100 shadow-xl rounded-none">
      <figure>
        <Link className="link" to={`/productDetail/${product?.id}`}>
          <img src={product?.images[0]} className="h-60" />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-normal">{product?.title}</h2>
        <div className="card-actions justify-between">
          <span>KS {product?.price}</span>
          <button className="add border-solid border-2 border-[#1C2E3D]" onClick={()=> dispatch}>
            <AddIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
