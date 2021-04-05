import { createSlice } from '@reduxjs/toolkit'
// import { nanoid } from 'nanoid'

export const worksListSlice = createSlice({
  name: 'form',
  initialState: {
    works: [
      {id: Math.random(10000), workName: 'Замена стекла', workPrice: 1000 },
      {id: Math.random(10000), workName: 'Замена всего', workPrice: 9000 },
    ]
  },
  reducers: {
    addWork: (state, action) => {
      state.works.push(action.payload)
    },
    delWork: (state, action) => {
      state.works = state.works.filter(w => w.id !== action.payload)
    },
    updateWork: (state, action) => {
      const index = state.works.findIndex(w => w.id === action.payload.id)
      state.works[index] = action.payload
    }
    // setWorkName: (state, action) => {
    //   state.workName = action.payload
    // },
    // setWorkPrice: (state, action) => {
    //   state.workPrice = action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { addWork, delWork, updateWork } = worksListSlice.actions

export default worksListSlice.reducer