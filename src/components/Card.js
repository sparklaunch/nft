import classes from "./Card.module.css";

function Card() {
  return (
    <div className={classes.Card}>
      <div className={classes.CardImage}>
        <img src="/assets/image-equilibrium.jpg" alt="Equilibrium" />
      </div>
    </div>
  );
}

export default Card;
