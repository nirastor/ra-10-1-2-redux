import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    workName: 'Initial text',
    workPrice: 12000,
  },
  reducers: {
    setWorkName: (state, action) => {
      state.workName = action.payload
    },
    setWorkPrice: (state, action) => {
      state.workPrice = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setWorkName, setWorkPrice } = formSlice.actions

export default formSlice.reducer