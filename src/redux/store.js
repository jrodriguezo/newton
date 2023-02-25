import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/user/userSlice'
import settingsReducer from './features/settings/settingsSlice'

export default configureStore({
  reducer: { 
    user: userReducer,
    settings: settingsReducer
  }
})