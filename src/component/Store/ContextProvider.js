import CartContextAPI from "./CartContextAPI";
import { useContext, useState, useEffect, useCallback } from "react";
import AuthContext from "./auth-context";
import axios from "axios";

const dummyProductArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    review:
      "Nice product awesome it's nice but if you are buying it for winter then it's not good the material is thin you can use it during summer",
    rating: 4,
  },
  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    review:
      "The color design and quality all was great but only negative is its very thick so it is higly suitable for cold place . So sweating during day time .",
    rating: 3,
  },
  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    review: "Nice products 👍👍😊",
    rating: 5,
  },
  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    review:
      "Good product can be wear in starting winter season. Inside the texture is little rough, I expected smooth texture but it's okayAt this price it is awesome.",
    rating: 4,
  },
];

const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const authctx = useContext(AuthContext);
  const [cartCount, setCartCount] = useState(0);
  const [data, setData] = useState([]);

  let dummyAmount = 0;
  let email;
  if (authctx.email !== null) {
    email = authctx.email.replace(/[@.]/g, "");
  }

  const getData = useCallback(async () => {
    const res = await axios.get(
      `https://e-commerce-c0ab2-default-rtdb.firebaseio.com/cart${email}.json`
    );
    let data = await res.data;
    let dummyCount = 0;
    if (data !== null) {
      dummyCount = Object.entries(data).length;
    }

    setCartCount(dummyCount);
    let dummyData;
    dummyData = Object.entries(data);
    setData(dummyData);
  }, [email]);

  useEffect(() => {
    getData();
  }, [getData]);

  const addItemHandler = async (item, quantity) => {
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
    const cartitem = { ...item, quantity };
    await axios({
      method: "POST",
      url: `https://e-commerce-c0ab2-default-rtdb.firebaseio.com/cart${email}.json`,
      data: cartitem,
    });
    getData();
    amountAddition();
  };

  const removeItemHandler = async (itemId) => {
    getData();
  };

  const dataArr = data.map((e) => {
    return e[1];
  });

  function amountAddition() {
    dataArr.forEach((e) => {
      dummyAmount += e.price * e.quantity;
    });
  }
  amountAddition();

  const store = {
    items: items,
    totalAmount: dummyAmount,
    cartCount: cartCount,
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
