import React, { useState } from 'react'
import '../styles/App.css';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import Login from './login/Login';
import { Home } from './Home/Home';
import Product from './product/Product';
import Cart from './cart/cart';
import Checkout from './checkout/Checkout';
import Contactus from './Navbar/Contactus';
import About from './Navbar/About'

const App = () => {
  const [Cartitems, setCartitems] = useState([]);

  const handleAddcart = (item) => {
    console.log(item);
    const existProduct = Cartitems.find((obj) => obj.id === item.id);
    if (existProduct) {
      setCartitems((prev) =>
        prev.map((obj) =>
          obj.id === item.id ? { ...obj, qty: obj.qty + 1 } : obj
        )
      );
    } else {
      setCartitems((prev) => [...prev, { ...item, qty: 1 }]);
    }
  }

  const handleRemovecart = (item) => {
    console.log(item);
    const existProduct = Cartitems.find((obj) => obj.id === item.id)
    if (existProduct.qty === 1) {
      const newCart = Cartitems.filter((obj) => obj.id !== item.id);
      setCartitems(newCart);
    } else {
      setCartitems((prev) =>
        prev.map((obj) =>
          obj.id === item.id ? { ...obj, qty: obj.qty - 1 } : p
        )
      );
    }
  }
  console.log(Cartitems);
  return (
    <HashRouter>
      <Navbar cartItems={Cartitems} />
      <Routes>
        <Route exact path='/' element={<Home onAddCart={handleAddcart} onRemoveCart={handleRemovecart} />} />
        <Route path='/products' element={<Product onAddCart={handleAddcart} onRemoveCart={handleRemovecart} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart cartItems={Cartitems} onRemoveCart={handleRemovecart} onAddCart={handleAddcart} />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/contact' element={<Contactus />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </HashRouter>
  )
}


export default App;
