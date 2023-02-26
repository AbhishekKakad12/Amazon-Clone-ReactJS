import React from "react";
import "../assets/css/Product.css";
import { useStore } from "react-redux";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
function Product({ id, title, image, price, rating, reviews }) {
  const navigate = useNavigate();

  return (
    <div
      className="product"
      onClick={() =>
        navigate("/view_product", {
          state: {
            product: {
              id: id,
              title: title,
              image: image,
              price: price,
              rating: rating,
              reviews: reviews,
            },
          },
        })
      }
    >
      <img src={image} alt="" />

      <div className="product__info">
        <p className="product__title">{title}</p>
        <div className="product__rating__reviews">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="product___rating_icon" />
            ))}
          <small>{reviews}</small>
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>

      {/* <button onClick={addToBasket}>Add to Basket</button> */}
    </div>
  );
}

export default Product;
