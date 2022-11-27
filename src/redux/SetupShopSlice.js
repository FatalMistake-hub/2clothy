import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'shopInfo',
    initialState: {
        reference: {
            name: '',
        },
        info: {
            
        },
        billing: {

        }

    },
    reducers: {
        // IMMER
        handleReference: (state, action) => {
            state.reference = action.payload;
        },
        handleInfo: (state, action) => {
            state.info = action.payload;
        },
        handleBilling: (state, action) => {
            state.billing = action.payload;
        },



        // action creators
    },
});
