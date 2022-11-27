import { createSelector } from '@reduxjs/toolkit';


export const cartListSelector = (state) => state.cartList;
export const setupShopSelector = (state) => state.shopInfo;
export const authListSelector = (state) => state.auth;

export const cartsRemainingSelector = createSelector(
  cartListSelector,

  (cartList) => {


      return cartList.cart
    });
export const authRemainingSelector = createSelector(
  authListSelector,

  (auth) => {
      return auth
    });
export const setupShopRemainingSelector = createSelector(
  setupShopSelector,

  (shopInfo) => {
      return shopInfo
    });
  // }
// );