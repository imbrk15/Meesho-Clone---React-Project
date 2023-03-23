import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default function CheckoutButton({ product }) {
  const [ProductPrice, setProductPrice] = useState(`${product.qty * product.price}`);
  console.log(ProductPrice);
  return (
    <div className='container'>
      <div className="row">
        <NavLink to='/checkout' className='btn btn-outline-dark mb-5 w-25 mx-auto'
          onClick={() => {
            localStorage.setItem("price", ProductPrice);
          }}>
          Proceed to Checkout
        </NavLink>
      </div>
    </div>
  )
}
