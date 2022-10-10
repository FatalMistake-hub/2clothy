import { createSelector } from '@reduxjs/toolkit';


export const cartListSelector = (state) => state.cartList;

export const cartsRemainingSelector = createSelector(
  cartListSelector,

  (cartList) => {


      return cartList
    });
  // }
// );