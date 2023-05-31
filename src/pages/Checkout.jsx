import React from "react";
import Layout from "../components/Layout";
import loadStripe from 'stripe';

const Checkout = () => {
  // const stripePromise = loadStripe(
  //   "pk_test_51NDIihD9ZcyBiExiURBtPntXsGItgvpqZ4ONqtEmxDzpMJAOM8LuzVYcN3v4OSQMLERTRNPz5gShsAvzhjiqNcpm001iiiAiHi"
  // ); 
  // console.log(stripePromise)
  // const handlePayment = async () => {
  //   try {
  //     const stripe = await stripePromise;
  //     const res = await makeRequest.post("/orders", {products,});

  //     await stripe.redirectToCheckout({
  //       sessionId: res.data.stripeSession.id,
  //     });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  return (
    <Layout>
      <h4 className="tracking-wide text-3xl font-semibold text-center">
        CHECKOUT
      </h4>
      <form action="">
        <div className="checkout flex">
          <div className="left w-[50%] flex flex-col my-5 p-5 border-r border-black gap-3">
            <div className="name">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                id="name"
                className="input input-bordered rounded-none w-full"
              />
            </div>
            <div className="payment">
              <h5 className="tracking-wide text-xl my-2">SHIPPING ADDRESS</h5>
              <div className="grid grid-rows-4 grid-cols-2 gap-2">
                <div className="country">
                  <label htmlFor="country">Country/Region</label>
                  <br />
                  <input
                    type="text"
                    id="country"
                    className="input input-bordered rounded-none w-full"
                  />
                </div>
                <div className="state">
                  <label htmlFor="state">State</label>
                  <br />
                  <input
                    type="text"
                    id="state"
                    className="input input-bordered rounded-none w-full"
                  />
                </div>
                <div className="address col-span-2">
                  <label htmlFor="street">Address</label>
                  <br />
                  <input
                    type="text"
                    id="street"
                    className="input input-bordered rounded-none w-full"
                  />
                </div>
                <div className="address col-span-2">
                  <input
                    type="text"
                    id="apartment"
                    className="input input-bordered rounded-none w-full"
                  />
                </div>
                <div className="city -mt-5">
                  <label htmlFor="city">City/Township</label>
                  <br />
                  <input
                    type="text"
                    id="city"
                    className="input input-bordered rounded-none w-full"
                  />
                </div>
                <div className="postal -mt-5">
                  <label htmlFor="postal">Postal Code</label>
                  <br />
                  <input
                    type="text"
                    id="postal"
                    className="input input-bordered rounded-none w-full"
                  />
                </div>
              </div>
            </div>
            <div className="contact flex flex-col gap-2">
              <h5 className="tracking-wide text-xl my-2">CONTACT</h5>
              <div className="phone">
                <label htmlFor="phone">Phone Number</label>
                <br />
                <input
                  type="text"
                  id="phone"
                  className="input input-bordered rounded-none w-full"
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  id="email"
                  className="input input-bordered rounded-none w-full"
                />
              </div>
              <div className="note">
                <label htmlFor="phone">Additional Notes (Optional) </label>
                <br />
                <textarea className="textarea textarea-bordered h-20 rounded-none w-full"></textarea>
              </div>
            </div>
          </div>
          <div className="right w-[50%] flex flex-col my-5 p-5">
            <div className="item border-b border-black p-2 flex justify-between align-middle my-2">
              <h5>baseball leather jacket</h5>
              <span>x2</span>
              <span>KS 14500</span>
            </div>
            <div className="subtotal border-b border-black p-2 flex justify-between align-middle my-2">
              <h5>Subtotal</h5>
              <span>KS 28500</span>
            </div>
            <div className="shipping border-b border-black p-2 flex justify-between align-middle my-2">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  className="radio checked:bg-[#1C2E3D]"
                />
                <span className="label-text mx-2">Shipping (Fees KS 3500)</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="shipping"
                  className="radio checked:bg-[#1C2E3D]"
                />
                <span className="label-text mx-2">Pickup</span>
              </label>
            </div>
            <div className="total border-b border-black p-2 flex justify-between align-middle my-2">
              <h5>Total</h5>
              <span>KS 28500</span>
            </div>
            <div className="payment flex flex-col justify-between align-middle my-2">
              <label className="label cursor-pointer flex justify-start gap-2">
                <input
                  type="radio"
                  name="payment"
                  className="radio checked:bg-[#1C2E3D]"
                />
                <span className="label-text">Bank Transfer</span>
              </label>
              <label className="label cursor-pointer flex justify-start gap-2">
                <input
                  type="radio"
                  name="payment"
                  className="radio checked:bg-[#1C2E3D]"
                />
                <span className="label-text">Kpay/Wavepay</span>
              </label>
              <label className="label cursor-pointer flex justify-start gap-2">
                <input
                  type="radio"
                  name="payment"
                  className="radio checked:bg-[#1C2E3D]"
                />
                <span className="label-text">Cash On Delivery</span>
              </label>
            </div>
            <div
              className="flex justify-end
            "
            >
              <button onClick={handlePayment} className="btn-primary">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default Checkout;
