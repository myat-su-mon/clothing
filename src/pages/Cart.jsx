import React from 'react'
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { resetCart } from '../redux/cartReducer';

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);

  const total = cart?.reduce((prev, current) => prev + current.price * current.qty, 0);

  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="cart">
        <h4 className="tracking-wide text-3xl font-semibold text-center">
          CART
        </h4>
        {cart?.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="total flex justify-between mx-5">
        <span>SUBTOTAL</span>
        <span>KS {total}</span>
      </div>
      <div className="flex justify-between my-5">
        <span className="text-red-500" onClick={()=> dispatch(resetCart())}>Reset Cart</span>
        <Link to="/checkout">
          <button className="btn-primary">CHECK OUT</button>
        </Link>
      </div>
    </Layout>
  );
}

export default Cart