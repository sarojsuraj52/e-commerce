import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import classes from "./Product.module.css";
import Title from "./Title";

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const productList = productsArr.map((item) => (
  <div className={classes.product_item}>
    <h2>{item.title}</h2>
    <div className={classes["img-container"]}>
      <img src={item.imageUrl} alt={item.title} />
    </div>
    <div className={classes["prop-details"]}>
      <span>${item.price}</span>
      <button type='button' className={classes['add-cart-button']}>ADD TO CART</button>
    </div>
  </div>
));

function Product(props) {
  return (
    <>
    <Header onShow={props.onShow}/>
      <Title />
      <div className={classes.product}>
        <h1>Music</h1>
        <div className={classes.product_list}>{productList}</div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
