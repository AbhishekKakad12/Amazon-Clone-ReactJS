import {
  ADD_TO_BASKET,
  EMPTY_BASKET,
  REMOVE_FROM_BASKET,
  SET_USER,
} from "./counter";

export const addToBasket = () => {
  return {
    type: ADD_TO_BASKET,
  };
};
export const emptyBasket = () => {
  return {
    type: EMPTY_BASKET,
  };
};

export const removeFromBasket = (id) => {
  return {
    type: REMOVE_FROM_BASKET,
    id: id,
  };
};
export const setUser = (user) => {
  console.log(user);
  return {
    type: SET_USER,
    payload: user,
  };
};
