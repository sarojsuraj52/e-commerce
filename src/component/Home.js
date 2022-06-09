import React from "react";
import classes from "./Home.module.css";
import Title from "./Title.js";

function Home() {
  return (
    <>
      <Title className={classes.title}>
        <button className={classes["album-btn"]}>Get Our Latest Album</button>
        <span className={classes["play-btn"]}>▶</span>
      </Title>
      <div className={classes.tour}>
        <h2>Tours</h2>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>JUL 16</span>
          <span className={classes["tour-place"]}>DETROIT, MI</span>
          <span className={classes["tour-place-prop"]}>
            DTE ENERGY MUSIC THEATRE
          </span>
          <button className={classes["buy-btn"]}>BUY TICKET</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>JUL 19</span>
          <span className={classes["tour-place"]}>TORONTO,ON</span>
          <span className={classes["tour-place-prop"]}>BUDWEISER STAGE</span>
          <button className={classes["buy-btn"]}>BUY TICKET</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>JUL 22</span>
          <span className={classes["tour-place"]}>BRISTOW, VA</span>
          <span className={classes["tour-place-prop"]}>JIGGY LUBE LIVE</span>
          <button className={classes["buy-btn"]}>BUY TICKET</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>JUL 29</span>
          <span className={classes["tour-place"]}>PHOENIX, AZ</span>
          <span className={classes["tour-place-prop"]}>AK-CHIN PAVILION</span>
          <button className={classes["buy-btn"]}>BUY TICKET</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>AUG 2</span>
          <span className={classes["tour-place"]}>LAS VEGAS, NV</span>
          <span className={classes["tour-place-prop"]}>T-MOBILE ARENA</span>
          <button className={classes["buy-btn"]}>BUY TICKET</button>
        </div>
        <div className={classes["tour-item"]}>
          <span className={classes["tour-date"]}>AUG 7</span>
          <span className={classes["tour-place"]}>CONCORD, CA</span>
          <span className={classes["tour-place-prop"]}>CONCORD PAVILION</span>
          <button className={classes["buy-btn"]}>BUY TICKET</button>
        </div>
      </div>
    </>
  );
}

export default React.memo(Home);
