import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "../assets/css/Orders.css";
import Order from "./Order";
import Header from "./Header";
import { useSelector } from "react-redux";

function Orders() {
  const user = useSelector((state) => state.user);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <>
      <Header />
      <div className="orders">
        <h1>Your Orders</h1>

        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Orders;
