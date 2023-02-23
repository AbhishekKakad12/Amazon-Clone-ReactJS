import React from "react";
import "../assets/css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../redux/reducer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Subtotal() {
  const navigate = useNavigate();

  const basket = useSelector((state) => state.basket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={(e) => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
