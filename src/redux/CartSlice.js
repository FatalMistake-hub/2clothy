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
                    productItem.quantity+= action.payload.productItem[0].quantity;
                } else {
                    shopItem.productItem.unshift({ ...action.payload.productItem[0] });
                }
            } else {
                state.unshift({ ...action.payload });
            }
        },
        removeProductItem: (state, action) => {
            
            const shopItem = state.find((item) => item.shopName === action.payload.idShop);
            const productItem = shopItem.productItem.find((productItem) => productItem.id === action.payload.idProduct);
            if (productItem) {
                shopItem.productItem.splice(
                    shopItem.productItem.findIndex((arrow) => arrow.idProduct === action.payload.idProduct),
                    1,
                );
                if(shopItem.productItem == 0 )
                {
                    state.splice(
                        state.findIndex((arrow) => arrow.shopName === action.payload.idShop),
                        1,
                    );
                }
            } 

            console.log('removeItem', state);
        },
        updateQuantityItem:(state, action)=>{
            const shopItem = state.find((item) => item.shopName === action.payload.shopName);
            if (shopItem) {
                const productItem = shopItem.productItem.find((productItem) => productItem.id === action.payload.productId);
                if (productItem) {
                    productItem.quantity = action.payload.quantity;
                }
            }
        }
        // action creators
    },
});

