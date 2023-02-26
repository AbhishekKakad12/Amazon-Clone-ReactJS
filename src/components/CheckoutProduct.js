import React from "react";
import { useStore } from "react-redux";
import "../assets/css/CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { removeFromBasket } from "../redux/actions";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const store = useStore();

  const removeItemFromBasket = () => {
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
              <StarIcon key={i} className="product___rating_icon" />
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeItemFromBasket} className="remove_btn">
            Remove from Basket
          </button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
