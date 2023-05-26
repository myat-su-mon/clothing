import React from 'react'
import { newArrivalsImgs } from '../data/data';

const NewArrivals = () => {
  return (
    <section id="newArrivals" className="container mx-auto px-4 my-10">
      <h4 className="tracking-wide text-3xl font-semibold text-center my-10">
        NEW ARRIVALS
      </h4>
      <div className="cards  grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-80 h-auto bg-base-100 shadow-xl">
          <figure>
            <img src={newArrivalsImgs[0]} />
          </figure>
        </div>
        <div className="w-80 h-auto  bg-base-100 shadow-xl">
          <figure>
            <img src={newArrivalsImgs[1]} />
          </figure>
        </div>
        <div className="w-80 h-auto  bg-base-100 shadow-xl">
          <figure>
            <img src={newArrivalsImgs[2]} />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default NewArrivals