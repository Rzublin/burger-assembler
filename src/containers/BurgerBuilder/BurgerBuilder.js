import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState([
    {
      type: "salad",
      quantity: 0,
    },
    {
      type: "bacon",
      quantity: 0,
    },
    {
      type: "cheese",
      quantity: 0,
    },
    {
      type: "meat",
      quantity: 0,
    },
  ]);
  const addIngredientHandler = (type) => {
    const newIngredients = ingredients.map((ingredient) =>
      ingredient.type === type
        ? { ...ingredient, quantity: ingredient.quantity + 1 }
        : ingredient
    );
    setIngredients(newIngredients);
  };
  const removeIngredientHandler = (type) => {
    const newIngredients = ingredients.map((ingredient) =>
      ingredient.type === type
        ? {
            ...ingredient,
            quantity: ingredient.quantity > 0 ? ingredient.quantity - 1 : 0,
          }
        : ingredient
    );
    setIngredients(newIngredients);
  };
  return (
    <Fragment>
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
      />
    </Fragment>
  );
}

export default BurgerBuilder;
