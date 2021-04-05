import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    workName: '',
    workPrice: '',
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
export const { setWorkName, setWorkPrice, clearForm } = formSlice.actions

export default formSlice.reducer