import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import PropTypes from "prop-types";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

function BuildControls({
  ingredients,
  addIngredientHandler,
  removeIngredientHandler,
  orderBurger,
}) {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price:{" "}
        <strong>
          {ingredients
            .reduce(
              (total, { quantity, price }) =>
                total + Number(quantity) * Number(price),
              0
            )
            .toFixed(2)}{" "}
          €
        </strong>
      </p>
      {controls.map(({ label, type }) => (
        <BuildControl
          label={label}
          type={type}
          addIngredientHandler={addIngredientHandler}
          removeIngredientHandler={removeIngredientHandler}
          key={label}
          ingredients={ingredients}
        />
      ))}

      {ingredients.reduce(
        (total, { quantity }) => total + Number(quantity),
        0
      ) > 0 && (
        <button className={styles.OrderButton} onClick={orderBurger}>
          ORDER NOW
        </button>
      )}
    </div>
  );
}

BuildControls.propTypes = {
  ingredients: PropTypes.array.isRequired,
  addIngredientHandler: PropTypes.func.isRequired,
  removeIngredientHandler: PropTypes.func.isRequired,
  orderBurger: PropTypes.func.isRequired,
};

export default BuildControls;
