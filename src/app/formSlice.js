import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    workName: '',
    workPrice: '',
    editID: null
  },
  reducers: {
    setWorkName: (state, action) => {
      state.workName = action.payload
    },
    setWorkPrice: (state, action) => {
      state.workPrice = action.payload
    },
    setBoth: (state, action) => {
      state.workName = action.payload.name
      state.workPrice = action.payload.price
    },
    setEditID: (state, action) => {
      state.editID = action.payload
    }
  },
})

export const { setWorkName, setWorkPrice, setBoth, setEditID } = formSlice.actions

export default formSlice.reducer