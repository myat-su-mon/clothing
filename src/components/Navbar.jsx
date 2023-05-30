import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="wrapper flex justify-between">
        <div className="left flex">
          <p className="font-bold">LOGO</p>
        </div>
        <div className="center flex gap-8">
          <Link to="/">Home</Link>
          <a href="/#newArrivals">New Arrivals</a>
          <a href="/#products">Products</a>
        </div>
        <div className="right flex align-middle gap-4">
          <div className="cart relative" onClick={() => setOpen(!open)}>
            <Link to="/cart">
              <ShoppingCartOutlinedIcon />
              <Badge>
                {cart ? cart.length : 0}
              </Badge>
            </Link>
          </div>
          <SearchIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
