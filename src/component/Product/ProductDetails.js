import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import classes from "./ProductDetails.module.css";
import CartContextAPI from "../Store/CartContextAPI";
import ReactImageMagnify from "react-image-magnify";

function ProductDetails() {
  const params = useParams();
  const ctx = useContext(CartContextAPI);
  let productDummy = ctx.productArr;
  const product = productDummy.find(
    (product) => product.id === Number(params.productId)
  );
  if (!product) {
    return (
      <p style={{ marginTop: "5rem", textAlign: "center" }}>
        {/* {" "} */}
        No Product Found
      </p>
    );
  }

  return (
    <div className={classes.productDetail}>
      <div>
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: product.title,
              isFluidWidth: true,
              src: product.imageUrl,
            },
            largeImage: {
              src: product.imageUrl,
              width: 600,
              height: 600,
            },
          }}
        />
      </div>
      <div className={classes.details}>
        <h3>{product.title}</h3>
        <span className={classes.price}>${product.price}</span>
        <span className={classes["review-heading"]}>Reviews & Ratings</span>
        <span className={classes.rating}>{product.rating} ★</span>
        <span> {product.review}</span>
      </div>
    </div>
  );
}

export default React.memo(ProductDetails);
