import { openSuccessToaster } from 'helpers/toaster.helpers'
import { getTranslation } from 'helpers/translations.helpers'
import store from 'index'
import { stopLoader } from 'redux-thunk/redux/Loader/loader.slice'

export const responseSuccessHandler = (response) => {
  const { responseType = 'json', loader, successMessage } = response.config || {}
  if (responseType === 'blob') {
    return { file: response.data, headers: response.headers }
  }
  // Loader logic to remove loader
  if (loader) {
    store.dispatch(stopLoader(loader))
  }
  // Open Success Toaster
  successMessage && openSuccessToaster(store.dispatch, getTranslation(successMessage))
  return response.data.data
}
