import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../../UI/Button/Button";

function OrderSummary({ purchaseBurger, cancelOrderBurger, ingredients }) {
  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredients.length > 0 &&
          ingredients.map(({ type, quantity }) => (
            <li key={type}>
              <span style={{ textTransform: "capitalize" }}>{type}</span>:{" "}
              {quantity} units
            </li>
          ))}
      </ul>
      <p>
        Total Price:{" "}
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
      <p>Continue to checkout?</p>
      <Button buttonType="Success" clicked={purchaseBurger}>
        CONTINUE
      </Button>
      <Button buttonType="Danger" clicked={cancelOrderBurger}>
        CANCEL
      </Button>
    </Fragment>
  );
}

OrderSummary.propTypes = {
  ingredients: PropTypes.array.isRequired,
  cancelOrderBurger: PropTypes.func.isRequired,
  purchaseBurger: PropTypes.func.isRequired,
};

export default OrderSummary;
