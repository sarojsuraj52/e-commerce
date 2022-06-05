import { useContext } from "react";
import classes from "./Product.module.css";
import Title from "../Title";
import ProductItem from "./ProductItems/ProductItem";
import CartContextAPI from "../Store/CartContextAPI";


function Product(props) {
  const ctx = useContext(CartContextAPI)

  const productList = ctx.productArr.map((item) => (
    <ProductItem key={item.id} id={item.id} title={item.title}  price={item.price} imageUrl={item.imageUrl}/>
  ));
  

  return (
    <>
      <Title />
      <div className={classes.product}>
        <h2>Music</h2>
        <div className={classes.product_list}>{productList}</div>
      </div>
    </>
  );
}

export default Product;
