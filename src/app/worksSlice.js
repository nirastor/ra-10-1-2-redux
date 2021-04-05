import { createSlice } from '@reduxjs/toolkit'

export const worksListSlice = createSlice({
  name: 'form',
  initialState: {
    filter: '',
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
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    clearFilter: (state) => {
      state.filter = ''
    }
  },
})

export const { addWork, delWork, updateWork, setFilter, clearFilter } = worksListSlice.actions

export default worksListSlice.reducer