import { combineReducers } from '@reduxjs/toolkit'
import authSlice from './Auth/auth.slice'
import hamSlice from './Ham/ham.slice'
import toasterSlice from './Toaster/toaster.slice'
import loaderSlice from './Loader/loader.slice'

export const rootReducer = combineReducers({
  auth: authSlice,
  ham: hamSlice,
  toaster: toasterSlice,
  loader: loaderSlice
})
