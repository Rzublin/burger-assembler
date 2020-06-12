import React, { Fragment } from "react";
import PropTypes from "prop-types";

function OrderSummary({ ingredients }) {
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
      <p>Continue to checkout?</p>
    </Fragment>
  );
}

OrderSummary.propTypes = {
  ingredients: PropTypes.array.isRequired,
};

export default OrderSummary;
