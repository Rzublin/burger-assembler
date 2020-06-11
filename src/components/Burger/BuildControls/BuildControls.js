import React from "react";
import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

function BuildControls({ addIngredientHandler, removeIngredientHandler }) {
  return (
    <div className={styles.BuildControls}>
      {controls.map(({ label, type }) => (
        <BuildControl
          label={label}
          type={type}
          addIngredientHandler={addIngredientHandler}
          removeIngredientHandler={removeIngredientHandler}
          key={label}
        />
      ))}
    </div>
  );
}

export default BuildControls;
