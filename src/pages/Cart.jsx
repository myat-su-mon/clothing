import React from 'react'
import Layout from '../components/Layout';
import {useSelector} from 'react-redux'

import CartItem from '../components/CartItem';

const Cart = () => {
  // const cart = useSelector((state) => state.products.cart);
  // const total = cart?.reduce(
  //   (prev, current) => prev + current.price * current.qty, 0
  // )

  const products = useSelector(state => state.cart.products);
  console.log(products)

  return (
    <Layout>
      <div className="cart">
        <h4 className="tracking-wide text-3xl font-semibold text-center">
          CART
        </h4>
        {
          products?.map((item) => (
            <CartItem key={item.id} item={item} />
          ))
        }
      </div>
      <div className="total flex justify-between mx-5">
        <span>SUBTOTAL</span>
        <span>KS 123</span>
      </div>
      <div className="text-end me-10">
        <button className="btn-primary">CHECK OUT</button>
      </div>
    </Layout>
  );
}

export default Cart