import { NavLink,Link } from "react-router-dom";
import classes from "./Header.module.css";
import { useContext } from "react";
import CartContextAPI from "../Store/CartContextAPI";
import AuthContext from "../Store/auth-context";

function Header(props) {
  const ctx = useContext(CartContextAPI);
  const authctx = useContext(AuthContext)
  const cartItem = ctx.items.length;

  const logoutHandler = ()=>{
    authctx.logout()
  }

  return (
    <div className={classes.header}>
      <ul className={classes.menu}>
        <li>
          <NavLink activeClassName={classes.active} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName={classes.active} to="/products">
            Products
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
        {!authctx.isLoggedIn && <Link to='/login' className={classes.loginBtn}>Login</Link>}
        {authctx.isLoggedIn && <a href='#logout' className={classes.loginBtn} onClick={logoutHandler}>Logout</a>}
        {authctx.isLoggedIn && <a href="#cart" onClick={props.onShow}>
          Cart <span>{cartItem}</span>
        </a>}
      </div>
    </div>
  );
}

export default Header;
