import React, { useEffect } from "react";
import "./assets/css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { auth } from "./components/firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStore } from "react-redux";
import { setUser } from "./redux/actions";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

function App() {
  const store = useStore();

  auth.onAuthStateChanged((authUser) => {
    console.log("THE USER IS >>> ", authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      store.dispatch(setUser(authUser));
    } else {
      // the user is logged out
      store.dispatch(setUser(null));
    }
  });

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/orders" element={<Orders />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route
            exact
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
