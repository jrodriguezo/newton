import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState'

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setUser: (state, action) => {
      state.user = action.payload
    },
    setIsRankingUpdated: (state, action) => {
      state.isRankingUpdated = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUser, setIsRankingUpdated } = userSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(setUserAsync(user))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const setUserAsync = (user) => (dispatch) => {
  dispatch(setUser(user))
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.user)`
export const selectUser = (state) => state.user
export const selectIsRankingUpdated = (state) => state.isRankingUpdated

export default userSlice.reducer