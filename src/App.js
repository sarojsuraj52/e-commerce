import { Route } from "react-router-dom";
import "./App.css";
import Cart from "./component/Cart/Cart";
import Product from "./component/Product/Product";
import { useState } from "react";
import ContextProvider from "./component/Store/ContextProvider";
import About from "./component/About";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import Home from "./component/Home";
import Contact from "./component/Contact";

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
        <Route exact path="/">
          <Home  />
        </Route>
        <Route path="/product">
          <Product onShow={showCart} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
