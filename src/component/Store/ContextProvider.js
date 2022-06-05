import CartContextAPI from "./CartContextAPI";
import { useState } from "react";

const dummyProductArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      review: "Nice product awesome it's nice but if you are buying it for winter then it's not good the material is thin you can use it during summer",
      rating:4,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      review: "The color design and quality all was great but only negative is its very thick so it is higly suitable for cold place . So sweating during day time .",
      rating:3
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      review: 'Nice products 👍👍😊',
      rating:5
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      review:'Good product can be wear in starting winter season. Inside the texture is little rough, I expected smooth texture but it\'s okayAt this price it is awesome.' ,
      rating:4
  },
];
const ContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemHandler = (item, quantity) => {
    const dummyItem = [...items];
    let hasAdded = false;
    dummyItem.forEach((element) => {
      if (element.id === item.id) {
        hasAdded = true;
        element.quantity = Number(element.quantity) + Number(quantity);
      }
    });

    if (!hasAdded) {
      dummyItem.push({ ...item, quantity });
    }
    setItems(dummyItem);
  };
  const removeItemHandler = (item) => {};

  const store = {
    items: items,
    totalAmount: 0,
    productArr: dummyProductArr,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContextAPI.Provider value={store}>
      {/* {console.log('Store',store.items)} */}
      {props.children}
    </CartContextAPI.Provider>
  );
};

export default ContextProvider;
