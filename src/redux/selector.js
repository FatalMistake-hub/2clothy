import { createSelector } from '@reduxjs/toolkit';


export const cartListSelector = (state) => state.cartList;

export const cartsRemainingSelector = createSelector(
  cartListSelector,

  (cartList) => {


      return cartList.cart
    });
export const authListSelector = (state) => state.auth;

export const authRemainingSelector = createSelector(
  authListSelector,

  (auth) => {
      return auth
    });
  // }
// );