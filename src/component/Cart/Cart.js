import classes from "./Cart.module.css";
import {useContext} from 'react'
import CartContextAPI from "../Store/CartContextAPI";


function Cart(props) {
    
    const ctx = useContext(CartContextAPI)
    
    const cartItems = ctx.items.map((item) =>
        <div key={item.id} className={classes['cart-row']}>
            <span className={[classes["cart-item"], classes["cart-column"]].join(" ")}> 
            <img src={item.imageUrl} alt={item.imageUrl} className={classes['cart-img']}/>
            <span className={classes['item-title']}>{item.title}</span>
            </span>
            <span className={[classes["cart-price"], classes["cart-column"]].join(" ")}>${item.price}</span>
            <span className={[classes["cart-quantity"], classes["cart-column"]].join(" ")}>
                <input type='number' value={item.quantity}  className={classes['cart-input']} readOnly/>
                <button className={classes['remove-btn']}>REMOVE</button>
            </span>
        </div>
    );
    return (
        <div className={classes.cart}>
            <h2 className={classes.heading}>CART</h2>
            <button onClick={props.onHide} className={classes.cancel}>X</button>
            <div className={[classes["cart-header"], classes['cart-row']].join(" ")}>
                <span className={[classes["cart-item"], classes["cart-column"]].join(" ")}> ITEM</span>
                <span className={[classes["cart-price"], classes["cart-column"]].join(" ")}>PRICE</span>
                <span className={[classes["cart-quantity"], classes["cart-column"]].join(" ")}>QUANTITY</span>
            </div>
            <div className={classes["cart-items"]}>
                {cartItems}
            </div>
            <div className={classes.total}>
                <span className={classes["total-title"]}>Total</span>
                <span className={classes["total-value"]}>$0.00</span>
            </div>
            <button className={classes["purchase-btn"]}>PURCHASE</button>
        </div>
    );
}

export default Cart;
