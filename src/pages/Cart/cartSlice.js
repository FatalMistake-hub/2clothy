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

        removeProductItem: (state, action) => {
            console.log("cartlist",action.cartList)
            const removeItem = state.cartList.filter((item) => item.shopName !== action.payload);
            state.cartList = removeItem;
        },

        // action creators
    },
});
