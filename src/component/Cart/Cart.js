import classes from "./Cart.module.css";
import { useContext, useState, useEffect, useCallback } from "react";
import CartContextAPI from "../Store/CartContextAPI";
import AuthContext from "../Store/auth-context";
import axios from "axios";
function Cart(props) {
  const ctx = useContext(CartContextAPI);
  const authctx = useContext(AuthContext);
  const [data, setData] = useState([]);
  const email = authctx.email.replace(/[@.]/g, "");

  const getData = useCallback(async () => {
    const res = await axios.get(
      `https://e-commerce-c0ab2-default-rtdb.firebaseio.com/cart${email}.json`
    );
    const data = res.data
    const dummyobj = Object.entries(data);

    setData(dummyobj);
  }, [email]);
  useEffect(() => {
    getData();
  }, [getData]);

  // console.log(data)

  const deleteHandler = async (id) => {
      const confirmRes = window.confirm("Are you Sure?");
      if (confirmRes === true) {
          const res = await axios.delete(
              `https://e-commerce-c0ab2-default-rtdb.firebaseio.com/cart${email}/${id}.json`
              );
              if (res.status === 200) {
                  alert("Item removed succesfully");
                } else {
                    alert("Removal cannot complete");
                }
            } else {
                alert("Cancelled");
            }
            ctx.removeItem();
            getData()
  };

  const cartItems = data.map((item) => (
    <div key={item[1].id} className={classes["cart-row"]}>
      <span
        className={[classes["cart-item"], classes["cart-column"]].join(" ")}
      >
        <img
          src={item[1].imageUrl}
          alt={item[1].imageUrl}
          className={classes["cart-img"]}
        />
        <span className={classes["item-title"]}>{item[1].title}</span>
      </span>
      <span
        className={[classes["cart-price"], classes["cart-column"]].join(" ")}
      >
        ${item[1].price}
      </span>
      <span
        className={[classes["cart-quantity"], classes["cart-column"]].join(" ")}
      >
        <input
          type="number"
          value={item[1].quantity}
          className={classes["cart-input"]}
          readOnly
        />
        <button
          onClick={() => deleteHandler(item[0])}
          className={classes["remove-btn"]}
        >
          REMOVE
        </button>
      </span>
    </div>
  ));
  return (
    <div className={classes.cart}>
      <h2 className={classes.heading}>CART</h2>
      <button onClick={props.onHide} className={classes.cancel}>
        X
      </button>
      <div className={[classes["cart-header"], classes["cart-row"]].join(" ")}>
        <span
          className={[classes["cart-item"], classes["cart-column"]].join(" ")}
        >
          {" "}
          ITEM
        </span>
        <span
          className={[classes["cart-price"], classes["cart-column"]].join(" ")}
        >
          PRICE
        </span>
        <span
          className={[classes["cart-quantity"], classes["cart-column"]].join(
            " "
          )}
        >
          QUANTITY
        </span>
      </div>
      <div className={classes["cart-items"]}>{cartItems}</div>
      <div className={classes.total}>
        <span className={classes["total-title"]}>Total</span>
        <span className={classes["total-value"]}>${ctx.totalAmount}</span>
      </div>
      <button className={classes["purchase-btn"]}>PURCHASE</button>
    </div>
  );
}

export default Cart;
