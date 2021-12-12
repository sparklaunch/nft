import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.Card}>
      <div className={classes.CardImage}>
        <img src="/assets/image-equilibrium.jpg" alt="Equilibrium" />
      </div>
      <div className={classes.CardTitle}>
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
          <span className={classes.CardFooterName}>Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
