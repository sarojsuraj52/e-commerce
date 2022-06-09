import React from "react";

const CartContextAPI = React.createContext({
    items:[],
    totalAmount:0,
    cartCount:0,
    productArr: 0,
    addItem:()=> {},
    removeItem: ()=> {}
});

export default CartContextAPI;