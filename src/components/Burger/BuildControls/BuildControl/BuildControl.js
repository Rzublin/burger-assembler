import React from "react";
import styles from "./BuildControl.module.css";
import PropTypes from "prop-types";

function BuildControl({
  ingredients,
  label,
  type,
  addIngredientHandler,
  removeIngredientHandler,
}) {
  return (
    <div className={styles.BuildControl}>
      <div className={styles.Label}>{label}</div>
      <button
        onClick={() => addIngredientHandler(type)}
        className={styles.More}
      >
        More
      </button>
      <button
        onClick={() => removeIngredientHandler(type)}
        className={styles.Less}
        disabled={
          ingredients.filter(
            (ingredient) => ingredient.type === type && ingredient.quantity > 0
          ).length === 0
        }
      >
        Less
      </button>
    </div>
  );
}

BuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
};

export default BuildControl;
