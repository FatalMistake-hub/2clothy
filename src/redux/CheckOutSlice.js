import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'checkOut',
    initialState: {
        paymentType: 'vnpay',
        shipping: {
            Address: '',
            Country: '',
            City: '',
            PhoneNumber: '',
        },
        payment: [
            {
                type: '',
                info: {
                    Id: '',
                    BankName: '',
                    BankNumber: '',
                    AccountName: '',
                    DateExpired: '',
                    DateStarted: '',
                    BankTypeId: 2,
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
                            price: '',
                        },
                    ],
                },
            ],
        },
        isFetching: false,
        error: false,
        success: false,
    },
    reducers: {
        // IMMER
        handlePaymentType: (state, action) => {
            state.paymentType = action.payload;
        },
        handleShipping: (state, action) => {
            state.shipping = action.payload;
        },
        handlePayment: (state, action) => {
            state.payment = action.payload;
        },
        handleReview: (state, action) => {
            state.billing = action.payload;
        },
        checkOutStart: (state) => {
            state.isFetching = true;
        },
        checkOutSuccess: (state, action) => {
            state.isFetching = false;
            state.review = action.payload;
            state.error = false;
        },
        checkOutFailed: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        // action creators
    },
});
