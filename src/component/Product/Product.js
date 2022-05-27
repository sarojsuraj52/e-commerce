import classes from "./Product.module.css";
import Title from "../Title";
import ProductItem from "./ProductItems/ProductItem";

const productsArr = [
  {
    id:1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id:2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id:3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id:4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

function Product(props) {

  const productList = productsArr.map((item) => (
    <ProductItem key={item.id} id={item.id} title={item.title}  price={item.price} imageUrl={item.imageUrl}/>
  ));
  

  return (
    <>
      <Title />
      <div className={classes.product}>
        <h1>Music</h1>
        <div className={classes.product_list}>{productList}</div>
      </div>
    </>
  );
}

export default Product;
