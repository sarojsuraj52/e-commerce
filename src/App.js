import { Route,Switch,Redirect } from "react-router-dom";
import { useContext } from "react";
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
import ProductDetails from "./component/Product/ProductDetails";
import Login from "./component/Login";
import AuthContext from "./component/Store/auth-context";

function App() {
  const [CartShown, setCartShown] = useState(false);
  const authctx = useContext(AuthContext)

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
        <Switch>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route path="/products" exact>
          {authctx.isLoggedIn && <Product onShow={showCart} />}
          {!authctx.isLoggedIn && <Redirect to="/login" />}
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route to="*">
          <Redirect to="/" />
        </Route>
        </Switch>
        <Footer />
      </ContextProvider>
    </>
  );
}

export default App;
