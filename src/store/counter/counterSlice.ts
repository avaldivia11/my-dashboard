import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CouterState {
  value: number
  isReady: boolean
}

const initialState: CouterState = {
  value: 5,
  isReady: false
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isReady) return
      state.value = action.payload
      state.isReady = true
    },
    increment: (state) => {
      state.value++
    },
    decrement: (state) => {
      if (state.value === 0) return
      state.value--
    },
    resetCounter: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) {
        state.value = 0
      }
      state.value = action.payload
    }
  }
})

export const { increment, decrement, resetCounter, initCounterState } =
  counterSlice.actions

export default counterSlice.reducer
