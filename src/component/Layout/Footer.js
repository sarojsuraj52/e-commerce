import classes from "./Footer.module.css";
import youtube from "../../assets/youtube.png";
import spotify from "../../assets/spotify.png";
import facebook from "../../assets/facebook.png";

function Footer() {
  return (
    <footer className={classes.footer}>
      <h1>The Generics</h1>
      <div className={classes.action}>
        <img src={youtube} alt="youtube" />
        <img src={spotify} alt="spotify" />
        <img src={facebook} alt="facebook" />
      </div>
    </footer>
  );
}

export default Footer;
