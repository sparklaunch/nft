import { useState } from "react";
import classes from "./Card.module.css";

function Card() {
  const [isHovered, setIsHovered] = useState(false);
  function mouseEnterHandler() {
    setIsHovered(true);
  }
  function mouseLeaveHandler() {
    setIsHovered(false);
  }
  return (
    <div className={classes.Card}>
      <div
        className={classes.CardImage}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img
          src="/assets/image-equilibrium.jpg"
          alt="Equilibrium"
          className={isHovered ? classes.hovered : null}
        />
        <img
          src="/assets/icon-view.svg"
          alt="View"
          style={isHovered ? { opacity: 1 } : { opacity: 0 }}
        />
      </div>
      <div
        className={classes.CardTitle}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <h1>Equilibrium #3429</h1>
      </div>
      <div className={classes.CardContent}>
        <p>Our Equilibrium collection promotes balance and calm.</p>
      </div>
      <div className={classes.CardPrice}>
        <div className={classes.Ethereum}>
          <img src="/assets/icon-ethereum.svg" alt="Ethereum Icon" />
          <p>0.041 ETH</p>
        </div>
        <div className={classes.TimeLeft}>
          <img src="/assets/icon-clock.svg" alt="Clock Icon" />
          <p>3 days left</p>
        </div>
      </div>
      <hr />
      <div className={classes.CardFooter}>
        <img src="/assets/image-avatar.png" alt="Avatar" />
        <p>
          Creation of{" "}
          <span
            className={classes.CardFooterName}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
