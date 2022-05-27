import React from "react";

const CartContextAPI = React.createContext({
    items:[],
    totalAmount:0,
    addItem:()=> {},
    removeItem: ()=> {}
});

export default CartContextAPI;