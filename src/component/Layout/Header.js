import classes from './Header.module.css'
import {useContext} from 'react'
import CartContextAPI from '../Store/CartContextAPI'

function Header(props){
    const ctx  = useContext(CartContextAPI)
    const cartItem = ctx.items.length;

    return <div className={classes.header}>
        <div className={classes.menu}>
            <div><h3>Home</h3></div>
            <div><h3>Store</h3></div>
            <div><h3>About</h3></div>
        </div>
        <div  className={classes.action}>
            <a href='#cart' onClick={props.onShow}>Cart  <span>{cartItem}</span></a>
        </div>
    </div>
}


export default Header