import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Pizzas } from '../../pages/Home'

type CartState = {
  items: Pizzas[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Pizzas>) => {
      const massa = state.items.find((item) => item.id === action.payload.id)

      if (!massa) {
        state.items.push(action.payload)
      } else {
        alert('A pizza está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
