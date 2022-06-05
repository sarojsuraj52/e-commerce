import classes from "./ProductItem.module.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContextAPI from "../../Store/CartContextAPI";


const ProductItem = (props) => {
  const ctx = useContext(CartContextAPI);
  const addtToCartHandler = () => {
    let quantity = 1;
    ctx.addItem(props, quantity);
  };

  return (
    <div className={classes.product_item}>
      <h3>{props.title}</h3>
      <div className={classes["img-container"]}>
        <Link to={`/products/${props.id}`}> <img src={props.imageUrl} alt={props.title} /></Link>
      </div>
      <div className={classes["prop-details"]}>
        <span>${props.price}</span>
        <button
          onClick={addtToCartHandler}
          type="button"
          className={classes["add-cart-button"]}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
