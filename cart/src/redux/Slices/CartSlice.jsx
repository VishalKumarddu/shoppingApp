// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   cartItems: [],
//   totalQuantity: 0,
//   totalPrice: 0,
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     add: (state, action) => {
//       const existingItem = state.cartItems.find(
//         (item) => item.id === action.payload.id
//       );
//       if (existingItem) {
//         existingItem.quantity += action.payload.quantity;
//         existingItem.totalPrice += action.payload.price * action.payload.quantity;
//       } else {
//         state.cartItems.push({
//           ...action.payload,
//           quantity: action.payload.quantity,
//           totalPrice: action.payload.price * action.payload.quantity,
//         });
//       }
//       state.totalQuantity += action.payload.quantity;
//       state.totalPrice += action.payload.price * action.payload.quantity;
//     },




//     remove: (state, action) => {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item.id === action.payload.id
//       );
//       if (itemIndex !== -1) {
//         const item = state.cartItems[itemIndex];
//         state.totalQuantity -= item.quantity;
//         state.totalPrice -= item.totalPrice;
//         state.cartItems.splice(itemIndex, 1);
//       }
//     },
   
//   },
// });

// export const { add, remove  } = cartSlice.actions;
// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],   // Array to store items in the cart
  totalQuantity: 0, // Total number of items in the cart
  totalPrice: 0    // Total price of items in the cart
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add item to the cart
    add: (state, action) => {
      state.cartItems.push(action.payload);
      state.totalQuantity += action.payload.quantity;
      state.totalPrice += action.payload.totalPrice;
    },

    // Remove item from the cart
    remove: (state, action) => {
      // Check if action.payload and action.payload.id are valid
      if (!action.payload || !action.payload.id) {
        console.error("Invalid payload for remove action:", action.payload);
        return;
      }

      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      
      if (itemIndex !== -1) {
        const item = state.cartItems[itemIndex];
        state.totalQuantity -= item.quantity;   // Update total quantity
        state.totalPrice -= item.totalPrice;    // Update total price
        state.cartItems.splice(itemIndex, 1);   // Remove item from cart
      }
    }
  }
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
