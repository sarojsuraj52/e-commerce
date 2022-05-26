import classes from './Header.module.css'


function Header(){
    return <div className={classes.header}>
        <div className={classes.menu}>
            <div><h3>Home</h3></div>
            <div><h3>Store</h3></div>
            <div><h3>About</h3></div>
        </div>
        <div className={classes.action}>
            <button>Cart </button>
        </div>
    </div>
}


export default Header