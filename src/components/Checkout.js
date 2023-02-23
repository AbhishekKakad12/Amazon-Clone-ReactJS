import React from "react";
import "../";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import Header from "./Header";
import { useSelector } from "react-redux";

function Checkout() {
  const basket = useSelector((state) => state.basket);
  const user = useSelector((state) => state.user);

  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
          />

          <div>
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
