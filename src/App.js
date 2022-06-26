import { Route,Switch,Redirect } from "react-router-dom";
import React,{ useContext,Suspense } from "react";
import { useState } from "react";
import "./App.css";
import ContextProvider from "./component/Store/ContextProvider";
import Header from "./component/Layout/Header";
import Footer from "./component/Layout/Footer";
import Home from "./component/Home";
import AuthContext from "./component/Store/auth-context";
import Cart from "./component/Cart/Cart";

const Login = React.lazy(()=>import('./component/Login'))
const Contact = React.lazy(()=>import('./component/Contact'))
const ProductDetails = React.lazy(()=>import('./component/Product/ProductDetails'))
const About = React.lazy(()=>import('./component/About'))
const Product = React.lazy(()=>import('./component/Product/Product'))



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
        <Suspense fallback={<p className='loading'>Loading...</p>}>
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
        </Suspense>
      </ContextProvider>
    </>
  );
}

export default App;
