import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'cartList',
    initialState: {
        cart: [
            // {
            //   id: '',
            //   shopName: 'fdsgdsfgsdfg',
            //   shopImage: '',
            //   orderDetails: [
            //     {
            //       id: '',
            //       itemName: '',
            //       size: '',
            //       productImage: '',
            //       quantity: '',
            //       price: ''
            //     }
            //   ],
            // },
        ],
    },
    reducers: {
        // IMMER
        addProductItem: (state, action) => {
            const shopItem = state.cart.find((item) => item.shopId === action.payload.shopId);
            if (shopItem) {
                const orderDetails = shopItem.orderDetails.find((orderDetails) => orderDetails.itemId === action.payload.orderDetails[0].itemId);
                if (orderDetails) {
                    orderDetails.quantity += action.payload.orderDetails[0].quantity;
                } else {
                    shopItem.orderDetails.unshift({ ...action.payload.orderDetails[0] });
                }
            } else {
                state.cart.unshift({ ...action.payload });
            }
        },
        removeProductItem: (state, action) => {
            const shopItem = state.cart.find((item) => item.shopId === action.payload.shopId);
            const orderDetails = shopItem.orderDetails.find((orderDetails) => orderDetails.itemId === action.payload.itemId);
            if (orderDetails) {
                shopItem.orderDetails.splice(
                    shopItem.orderDetails.findIndex((arrow) => arrow.itemId === action.payload.itemId),
                    1,
                );
                if (shopItem.orderDetails == 0) {
                    state.cart.splice(
                        state.cart.findIndex((arrow) => arrow.shopId === action.payload.shopId),
                        1,
                    );
                }
            }
        },
        updateQuantityItem: (state, action) => {
            const shopItem = state.cart.find((item) => item.shopId === action.payload.shopId);
            if (shopItem) {
                const orderDetails = shopItem.orderDetails.find((orderDetails) => orderDetails.itemId === action.payload.itemId);
                if (orderDetails) {
                    orderDetails.quantity = action.payload.quantity;
                }
            }
        },
        handleCart: (state, action) => {
            state.cart = action.payload;
        },
        // action creators
    },
});
