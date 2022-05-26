
import './App.css';
import Cart from './component/Cart/Cart';
import Product from './component/Product';
import {useState} from 'react'

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
      <Product onShow={showCart}/>
      {CartShown && <Cart onHide={hideCart} />}
    </>
  );
}

export default App;
