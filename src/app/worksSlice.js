import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

export const worksListSlice = createSlice({
  name: 'form',
  initialState: {
    works: [
      {id: nanoid(), workName: 'Замена стекла', workPrice: 1000 },
      {id: nanoid(), workName: 'Замена всего', workPrice: 9000 },
    ]
  },
  reducers: {
    // setWorkName: (state, action) => {
    //   state.workName = action.payload
    // },
    // setWorkPrice: (state, action) => {
    //   state.workPrice = action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
// export const { setWorkName, setWorkPrice } = formSlice.actions

export default worksListSlice.reducer