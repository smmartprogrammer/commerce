import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: Array<any>;
  totalAmount: number
  totalQuantity: number
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state:CartState,actions:PayloadAction<{product:any, quantity:number}>) {
      state.value += 1
    },
    removeFromCart: (state,actions:PayloadAction<any>) => {
      state.value -= 1
    },
    clearCart: (state) => {
      state == initialState
    },
  },
})

// Action creators are generated for each case reducer function
export const counterActions = cartSlice.actions

export default cartSlice.reducer
