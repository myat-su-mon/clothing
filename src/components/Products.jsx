import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { products } from "../data/data";

const Products = () => {

  return (
    <section id="products" className="container mx-auto px-4 my-10">
      <h4 className="tracking-wide text-3xl font-semibold text-center my-10">
        PRODUCTS
      </h4>
      <div className="cards grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products
          ?.filter((product) => product.id < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      <div className="text-center p-10">
        <Link to="/productList">
          <button className="btn-primary">MORE ITEMS</button>
        </Link>
      </div>
    </section>
  );
};

export default Products;
