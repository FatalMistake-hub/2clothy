import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'cartList',
    initialState: [
        // {
        //   // id: '',
        //   shopName: '',
        //   shopImage: '',
        //   productItem: [
        //     {
        //       // id: '',
        //       itemName: '',
        //       size: '',
        //       productImage: '',
        //       quantity: '',
        //       price: ''
        //     }
        //   ],
        // },
    ],
    reducers: {
        // IMMER
        addProductItem: (state, action) => {
            const shopItem = state.find((item) => item.shopName === action.payload.shopName);
            if (shopItem) {
                const productItem = shopItem.productItem.find((productItem) => productItem.id === action.payload.productItem[0].id);
                if (productItem) {
                    productItem.quantity++;
                } else {
                    shopItem.productItem.unshift({ ...action.payload.productItem[0] });
                }
            } else {
                state.unshift({ ...action.payload });
            }

        },
        removeProductItem: (state, action) => {
            // const removeItem = state.filter((item) => item.shopName !== action.payload);
            state.splice(
                state.findIndex((arrow) => arrow.shopName === action.payload),
                1,
            );
            console.log('removeItem', state);

            // state = removeItem;
        },
        // action creators
    },
});
