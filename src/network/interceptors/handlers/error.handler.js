import { signOut } from 'helpers/cookie.helpers'
import { openErrorToaster } from 'helpers/toaster.helpers'
import { getTranslatedErrorMessage, getTranslation } from 'helpers/translations.helpers'
import store from 'index'
import errorMessages from 'network/messages/errorMessages'
import { stopLoader } from 'redux-thunk/redux/Loader/loader.slice'

export const errorHandler = (error) => {
  if (error.response.status === 401) {
    // Snackbar UnAuthed
    openErrorToaster(store.dispatch, getTranslation(errorMessages.unAuthorized))
    signOut()
    store.dispatch(stopLoader(error.response.config.loader))
    return Promise.reject(error.response.data.errors)
  } else if (error.response.status === 500) {
    // Snackbar Internal Server Error
    openErrorToaster(store.dispatch, getTranslation(errorMessages.internalServerError))
    store.dispatch(stopLoader(error.response.config.loader))
    return Promise.reject(error.response.data.errors)
  }
  // Other errors
  if (error.response.config.loader) {
    store.dispatch(stopLoader(error.response.config.loader))
  }
  // Open Error Toaster
  const apiErrorCode = error.response.data.errors[0].errorCode
  openErrorToaster(store.dispatch, getTranslatedErrorMessage(apiErrorCode))
  return Promise.reject(error.response.data.errors)
}
