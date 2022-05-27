import classes from "./ProductItem.module.css";
import React, { useContext } from "react";
import CartContextAPI from "../../Store/CartContextAPI";

const ProductItem = (props) => {
  const ctx = useContext(CartContextAPI);
  const addtToCartHandler = () => {
    let quantity = 1;
    ctx.addItem(props, quantity);
  };

  return (
    <div className={classes.product_item}>
      <h2>{props.title}</h2>
      <div className={classes["img-container"]}>
        <img src={props.imageUrl} alt={props.title} />
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
