import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";

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
  return (
    <div>
      <Burger ingredients={ingredients} />
    </div>
  );
}

export default BurgerBuilder;
