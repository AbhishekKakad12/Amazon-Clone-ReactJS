import { useLocation } from "react-router-dom";
import "../assets/css/viewProduct.css";
import StarIcon from "@mui/icons-material/Star";

import amzDel from "../assets/images/amzDel.png";
import cod from "../assets/images/cod.png";
import freeDel from "../assets/images/freeDel.png";
import replace from "../assets/images/replace.png";
import warranty from "../assets/images/warranty.png";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useStore } from "react-redux";
import { addToBasket } from "../redux/actions";

function ViewProduct() {
  const { state } = useLocation();
  const store = useStore();

  const addItemToBasket = () => {
    // dispatch the item into the data layer
    store.dispatch(
      addToBasket({
        item: {
          id: state.product.id,
          title: state.product.title,
          image: state.product.image,
          price: state.product.price,
          rating: state.product.rating,
          reviews: state.product.reviews,
        },
      })
    );
  };

  return (
    <div className="view_product">
      <div className="product_img_div">
        <img src={state.product.image} alt="product_img" />
      </div>
      <div className="product_details_div">
        <div className="product__info">
          <p className="product_title">{state.product.title}</p>
          <div className="product__rating__reviews">
            {Array(state.product.rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="product___rating_icon" />
              ))}
            <small>{state.product.reviews}</small>
          </div>
          <p className="product__price">
            <small>$</small>
            <strong>{state.product.price}</strong>
          </p>
          <p className="inc_all_taxes">Inclusive of all taxes</p>
          <p className="emi">EMI starts at ₹812. No Cost EMI available</p>
        </div>
        <hr />
        <div className="amz_at_a_glance_row">
          <div className="amz_glance">
            <img className="glance_img" src={freeDel} alt="Free Delivery" />
            <p className="glance__text">Free Delivery</p>
          </div>
          <div className="amz_glance">
            <img className="glance_img" src={cod} alt="Pay on Delivery" />
            <p className="glance__text">Pay on Delivery</p>
          </div>
          <div className="amz_glance">
            <img
              className="glance_img"
              src={replace}
              alt="7 days Replacement"
            />
            <p className="glance__text">7 days Replacement</p>
          </div>
          <div className="amz_glance">
            <img className="glance_img" src={amzDel} alt="Amazon Delivered" />
            <p className="glance__text">Amazon Delivered</p>
          </div>
          <div className="amz_glance">
            <img className="glance_img" src={warranty} alt="3 Year Warranty" />
            <p className="glance__text">3 Year Warranty</p>
          </div>
        </div>
        <hr />
        <div className="product_details">
          <strong>Screen Size</strong> 80 Centimetres <br />
          <strong>Display Resolution Maximum</strong> 1920 X 1080 (FHD) Pixels
          <br />
          <strong>Brand</strong> ZEBRONICS
          <br />
          <strong>Special Feature</strong> Curved
          <br />
          <strong>Refresh Rate</strong> 165 Hz
          <br />
        </div>
      </div>
      <div className="product_checkout">
        <p className="product__price">
          <small>$</small>
          <strong>{state.product.price}</strong>
        </p>
        <p className="delivery_details">FREE delivery Thursday, 2 March.</p>
        <p className="offer">Order within 8 hrs 57 mins. Details</p>
        <p className="select_location">
          <LocationOnOutlinedIcon className="header__location_icon" />
          <p className="select_location_text">Select delivery location</p>
        </p>
        <p className="stock">In stock</p>
        <p className="sold_by">
          Sold by Appario Retail Private Ltd and Fulfilled by Amazon.
        </p>
        <div className="actions">
          <button className="add_to_cart" onClick={addItemToBasket}>
            Add to Cart
          </button>
          <button className="buy_now" onClick={addItemToBasket}>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
