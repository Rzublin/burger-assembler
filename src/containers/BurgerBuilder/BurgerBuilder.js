import React, { Fragment, useState } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

function BurgerBuilder() {
  const [ingredients, setIngredients] = useState([
    {
      type: "salad",
      quantity: 0,
      price: 0.3,
    },
    {
      type: "bacon",
      quantity: 0,
      price: 0.8,
    },
    {
      type: "cheese",
      quantity: 0,
      price: 0.8,
    },
    {
      type: "meat",
      quantity: 0,
      price: 1.2,
    },
  ]);
  const [isOrdered, setIsOrdered] = useState(false);
  const [loadingOrder, setLoadingOrder] = useState(false);
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
  const orderBurger = () => {
    setIsOrdered(true);
  };
  const cancelOrderBurger = () => {
    setIsOrdered(false);
  };
  const purchaseBurger = () => {
    //setIsOrdered(false);
    const order = {
      ingredients: ingredients,
      price: ingredients
        .reduce(
          (total, { quantity, price }) =>
            total + Number(quantity) * Number(price),
          0
        )
        .toFixed(2),
      costumer: {
        name: "Max Musterman",
        address: {
          street: "Musterstrasse 1",
          zipCode: "81476",
          country: "germany",
        },
        email: "max@musteremail.com",
      },
      deliveryMethod: "fastest",
    };
    setLoadingOrder(true);
    axios
      .post("/orders.json", order)
      .then((response) => {
        setLoadingOrder(false);
        console.log(response);
      })
      .catch((error) => {
        setLoadingOrder(false);
        console.log(error);
      });
  };
  return (
    <Fragment>
      {isOrdered && (
        <Modal cancelOrderBurger={cancelOrderBurger}>
          {loadingOrder ? (
            <Spinner />
          ) : (
            <OrderSummary
              ingredients={ingredients}
              cancelOrderBurger={cancelOrderBurger}
              purchaseBurger={purchaseBurger}
            />
          )}
        </Modal>
      )}
      <Burger ingredients={ingredients} />
      <BuildControls
        addIngredientHandler={addIngredientHandler}
        removeIngredientHandler={removeIngredientHandler}
        ingredients={ingredients}
        orderBurger={orderBurger}
      />
    </Fragment>
  );
}

export default BurgerBuilder;
