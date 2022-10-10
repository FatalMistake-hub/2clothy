// const intitState = {
//     users: [
//         { id: 1, name: 'John' },
//         { id: 2, name: 'Johny' },
//     ],
// };

// const rootReducer = (state = intitState, action) => {
//     return state;
// };

// export default rootReducer
import { configureStore } from '@reduxjs/toolkit';
import CartSlice from '~/redux/CartSlice';

const store = configureStore({
    reducer: {
        cartList: CartSlice.reducer,
    },
});

export default store;
