import { Route } from "react-router-dom";
import "./App.css";
import Cart from "./component/Cart/Cart";
import Product from "./component/Product/Product";
import { useState } from "react";
import ContextProvider from "./component/Store/ContextProvider";
import About from "./component/About";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";

function App() {
  const [CartShown, setCartShown] = useState(false);

  const showCart = () => {
    setCartShown(true);
  };
  const hideCart = () => {
    setCartShown(false);
  };
  return (
    <>
      <ContextProvider>
        {CartShown && <Cart onHide={hideCart} />}
        <Header onShow={showCart}/>
        <Route path="/product">
          <Product onShow={showCart} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
