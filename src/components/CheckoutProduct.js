import React from "react";
import { useStore } from "react-redux";
import "../assets/css/CheckoutProduct.css";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const store = useStore();

  const removeFromBasket = () => {
    // remove the item from the basket
    store.dispatch(removeFromBasket(id));
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
