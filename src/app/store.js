import { configureStore } from '@reduxjs/toolkit'
import formReducer from './formSlice'
import worksListReducer from './worksSlice'

export default configureStore({
  reducer: {
    form: formReducer,
    worksList: worksListReducer,
  },
})