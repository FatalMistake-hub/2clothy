import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'checkOut',
    initialState: {
        shipping: {
            address: '',
            country: '',
            city: '',
            phone: '',
        },
        payment: [
            {
                name: '',
                type: '',
                info: {
                    number: '',
                    owner: '',
                    dateCreated: '',
                },
            },
        ],
        review: {
            orderDetails: [
                {
                  id: '',
                  shopName: '',
                  shopImage: '',
                  orderDetails: [
                    {
                      id: '',
                      itemName: '',
                      size: '',
                      productImage: '',
                      quantity: '',
                      price: ''
                    }
                  ],
                },
            ],
        },
    },
    reducers: {
        // IMMER
        handleShipping: (state, action) => {
            state.shipping = action.payload;
        },
        handlePayment: (state, action) => {
            state.payment = action.payload;
        },
        handleReview: (state, action) => {
            state.billing = action.payload;
        },

        // action creators
    },
});
