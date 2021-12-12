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
        <div className={classes.Etherium}></div>
        <div className={classes.TimeLeft}></div>
      </div>
    </div>
  );
}

export default Card;
