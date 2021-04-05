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
export const { addWork } = worksListSlice.actions

export default worksListSlice.reducer