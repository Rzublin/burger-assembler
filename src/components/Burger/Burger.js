import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";

function Burger({ ingredients }) {
  const noIngredients = ingredients.reduce(
    (total, el) => total + el.quantity,
    0
  );

  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {noIngredients > 0 ? (
        ingredients.map(({ quantity, type }) => {
          return [...Array(quantity)].map((_, i) => (
            <BurgerIngredient type={type} key={type + i} />
          ));
        })
      ) : (
        <p>Please start adding ingredients</p>
      )}

      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

Burger.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default Burger;
