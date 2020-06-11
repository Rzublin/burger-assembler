import React, { useState } from "react";
import Burger from "../../components/Burger/Burger";

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState([
    {
      type: "salad",
      quantity: 1,
    },
    {
      type: "bacon",
      quantity: 1,
    },
    {
      type: "cheese",
      quantity: 1,
    },
    {
      type: "meat",
      quantity: 2,
    },
  ]);
  return (
    <div>
      <Burger ingredients={ingredients} />
    </div>
  );
}

export default BurgerBuilder;
