import React, { useState } from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { products, sizes } from '../data/data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [activeSize, setActiveSize] = useState("");

  const detailId = useParams().detailId;
  const detailProduct = products?.find((product) => product.id == detailId);

  const handleClick = (e) => {
    setSize(e.currentTarget.innerText);
    e.target.classList.add("active-btn")
  }

  return (
    <Layout>
      <div className="flex align-middle gap-10">
        <div className="img-container w-[50%] mb-5">
          <img src={detailProduct.image} />
        </div>
        <div className="w-[50%]">
          <h4 className="text-3xl tracking-wide leading-relaxed my-5">
            {detailProduct.title}
          </h4>
          <h4 className="text-2xl my-5">KS {detailProduct.price}</h4>
          <br />
          <span>Available Sizes</span>
          <br />
          <div className="size btn-group flex">
            {sizes?.map((size) => (
              <button
                onClick={() => setActiveSize(size.size)}
                key={size.id}
                className={`btn-outline ${
                  size.size == activeSize && "active-btn"
                }`}
              >
                {size.size}
              </button>
            ))}
          </div>
          <div className="qty mb-5">
            <button
              className="btn-no-outline"
              onClick={() => setQty((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            <span className="me-2">{qty}</span>
            <button
              className="btn-no-outline"
              onClick={() => setQty((prev) => prev + 1)}
            >
              +
            </button>
            <button
              className="btn-primary"
              onClick={() =>
                dispatch(
                  addToCart({ ...detailProduct, qty: qty, size: activeSize })
                )
              }
            >
              ADD TO CART
            </button>
          </div>
          <span>DESCRIPTION</span>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            provident quibusdam a et modi, atque aperiam totam adipisci
            exercitationem nulla velit quos voluptas quo facere hic amet ex
            ipsum veniam.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ProductDetail