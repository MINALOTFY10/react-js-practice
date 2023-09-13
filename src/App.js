import React, { Fragment, useState, useRef, useEffect } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setshowCart] = useState(false);

  const openCartHandler = () => {
    setshowCart(true);
  };

  const closeCartHandler = () => {
    setshowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onClickAction={closeCartHandler} />}
      <Header onClickAction={openCartHandler}></Header>
      <Meals></Meals>
    </CartProvider>
  );
}

export default App;
