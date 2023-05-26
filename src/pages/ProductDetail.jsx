import React, { useState } from 'react'
import Layout from '../components/Layout';

const ProductDetail = () => {

  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/15625985/pexels-photo-15625985/free-photo-of-children-clothes-on-hangers-in-shop.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <Layout>
      <div className="flex align-middle gap-10">
        <div className="img-container w-[50%] mb-5">
          <img
            src={images[0]}
            // onClick={ e => setSelectedImg(0)}
            className="shadow-xl"
          />
        </div>
        <div className="w-[50%]">
          <h4 className="text-3xl tracking-wide leading-relaxed my-5">
            MEN WEAR SPORT SHIRT
          </h4>
          <h4 className="text-2xl my-5">KS 53500</h4>
          <br />
          <span>Available Sizes</span>
          <br />
          <div className="btn-group flex">
            <button className="btn-outline">S</button>
            <button className="btn-outline">M</button>
            <button className="btn-outline active-btn">L</button>
            <button className="btn-outline">XL</button>
            <button className="btn-outline">XXL</button>
          </div>
          <div className="add-to-cart mb-5">
            <button
              className="btn-no-outline"
              onClick={() => setQuantity((prev) => prev===1 ? 1 : prev - 1)}
            >
              -
            </button>
            <span className="me-2">{quantity}</span>
            <button
              className="btn-no-outline"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
            <button className="btn-primary">ADD TO CART</button>
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