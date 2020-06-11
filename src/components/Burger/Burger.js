import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import PropTypes from "prop-types";

function Burger({ ingredients }) {
  return (
    <div className={styles.burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients.map(({ quantity, type }) => {
        return [...Array(quantity)].map((_, i) => (
          <BurgerIngredient type={type} key={type + i} />
        ));
      })}

      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

Burger.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default Burger;
