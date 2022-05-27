import React from 'react';
import './App.css';
import Cart from './component/Cart/Cart';
import Product from './component/Product/Product';
import {useState} from 'react'
import ContextProvider from './component/Store/ContextProvider';

function App() {
  const [CartShown,setCartShown] = useState(false)

  const showCart=()=>{
    setCartShown(true)
  }
  const hideCart=()=>{
    setCartShown(false)
  }
  return (
    <>
    <ContextProvider>
      {CartShown && <Cart onHide={hideCart} />}
      <Product onShow={showCart}/>
    </ContextProvider>
    </>
      
    
  );
}

export default App;
