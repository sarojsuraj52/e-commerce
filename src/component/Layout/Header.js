import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext } from "react";
import CartContextAPI from "../Store/CartContextAPI";

function Header(props) {
  const ctx = useContext(CartContextAPI);
  const cartItem = ctx.items.length;

  return (
    <div className={classes.header}>
      <ul className={classes.menu}>
        <li>
          <NavLink activeClassName={classes.active} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/product">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className={classes.action}>
        <a href="#cart" onClick={props.onShow}>
          Cart <span>{cartItem}</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
