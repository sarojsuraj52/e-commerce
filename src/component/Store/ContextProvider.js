import CartContextAPI from "./CartContextAPI";
import {useState} from 'react'

const ContextProvider = (props)=>{
    const [items,setItems] = useState([])

    const addItemHandler = (item,quantity)=>{
        const dummyItem = [...items]
        let hasAdded = false
        dummyItem.forEach(element=>{
            if(element.id === item.id){
                hasAdded = true
                element.quantity = Number(element.quantity) + Number(quantity)
            }
        })

        if(!hasAdded){
            dummyItem.push({...item,quantity})
        }
        setItems(dummyItem)
    }
    const removeItemHandler = (item)=>{

    }


    const store = {
        items:items,
        totalAmount:0,
        addItem:addItemHandler,
        removeItem: removeItemHandler
    }


    return(
        <CartContextAPI.Provider value={store}>
            {/* {console.log('Store',store.items)} */}
            {props.children}
        </CartContextAPI.Provider>
    )
}

export default ContextProvider