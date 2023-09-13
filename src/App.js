import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [checkoutIsShown, setcheckoutIsShown] = useState(false);

  //Control Cart visibility
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  //Control Checkout visibility
  const showCheckoutHandler = () => {
    setcheckoutIsShown(true);
    setCartIsShown(false);
  };

  const hideCheckoutHandler = () => {
    setcheckoutIsShown(false);
  };
  

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} openCheckout={showCheckoutHandler} />}
      {checkoutIsShown && <Checkout onClose={hideCheckoutHandler} onCancel={hideCheckoutHandler}/>}

      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
