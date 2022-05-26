import classes from "./Cart.module.css";

const cartElements = [
    {
        title: "Colors",
        price: 100,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        quantity: 2,
    },
    {
        title: "Black and white Colors",
        price: 50,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        quantity: 3,
    },
    {
        title: "Yellow and Black Colors",
        price: 70,
        imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        quantity: 1,
    },
];

const cartItems = cartElements.map((item) =>
    <div className={classes['cart-row']}>
        <span className={[classes["cart-item"], classes["cart-column"]].join(" ")}> 
        <img src={item.imageUrl} alt={item.imageUrl} className={classes['cart-img']}/>
        <span className={classes['item-title']}>{item.title}</span>
        </span>
        <span className={[classes["cart-price"], classes["cart-column"]].join(" ")}>${item.price}</span>
        <span className={[classes["cart-quantity"], classes["cart-column"]].join(" ")}>
            <input type='number' value={item.quantity} className={classes['cart-input']} />
            <button className={classes['remove-btn']}>REMOVE</button>
        </span>

    </div>


);



function Cart(props) {
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
