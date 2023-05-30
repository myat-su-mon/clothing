import React from "react";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";
import { products } from "../data/data";

const ProductList = () => {
  
  return (
    <Layout>
      <h4 className="tracking-wide text-3xl font-semibold text-center mt-3">
        PRODUCT LIST
      </h4>
      <div className="w-72 border-solid border-2 border-black mx-auto my-5 flex p-2">
        <a className="w-[50%] text-right border-r-2 pe-5 border-black">MEN</a>
        <a className="w-[50%] ps-5">WOMEN</a>
      </div>
      <div className="cards grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 my-5">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default ProductList;
