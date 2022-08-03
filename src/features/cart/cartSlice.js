import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload
      state.cartItems = state.cartItems.filter(item => {
        return item.id !== itemId
      })
    },
    increaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === payload.id
      })
      cartItem.amount += 1
    },
    decreaseItem: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === payload.id
      })
      cartItem.amount -= 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      });
      state.amount = amount
      state.total = total
    }
  }
})

export const { clearCart, removeItem, increaseItem, decreaseItem, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;