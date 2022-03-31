import { createSlice } from '@reduxjs/toolkit'
import { operatorLogin, operatorLogout, updatePassword } from 'redux-thunk/thunk/Auth/auth.thunk'
const defaultAuthState = {}

const authSlice = createSlice({
  name: 'authSlice',
  initialState: defaultAuthState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operatorLogin.fulfilled, (state, action) => {
        return {
          ...defaultAuthState
        }
      })
      .addCase(operatorLogout.fulfilled, (state, action) => {
        return {
          ...defaultAuthState
        }
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        return {
          ...defaultAuthState
        }
      })
  }
})

export default authSlice.reducer
