import React from 'react'
import { sliderImgs } from "../data/data";
import { Link } from 'react-router-dom';

const Slider = () => {
    
  return (
    <section className="slider container mx-auto px-4 flex">
      <div className="left w-[50%] flex flex-col gap-5 justify-center">
        <h3 className="font-bold text-5xl tracking-wide leading-relaxed mr-2">
          Find The Best Fashion Style For You
        </h3>
        <p className="w-[80%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni at
          inventore, in similique velit, nihil officiis recusandae rerum fugiat,
          mollitia consectetur vitae natus laudantium veritatis iure quia
          doloremque! Hic, facere!
        </p>
        <Link to="/productList">
          <button className="btn-primary w-[30%]">SHOP NOW</button>
        </Link>
      </div>
      <div className="right w-[50%] h-[75%] carousel">
        <div className="carousel-item w-full">
          <img src={sliderImgs[0]} className="w-full" />
        </div>
        <div className="carousel-item w-full">
          <img src={sliderImgs[1]} className="w-full" />
        </div>
        <div className="carousel-item w-full">
          <img src={sliderImgs[2]} className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Slider