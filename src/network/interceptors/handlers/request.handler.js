import { getAuthToken } from 'helpers/cookie.helpers'
import store from 'index'
import { startLoader } from 'redux-thunk/redux/Loader/loader.slice'

export const requestHandler = (request) => {
  if (request.handlerEnabled) {
    const authToken = getAuthToken()
    if (authToken) {
      request.headers.Authorization = `Bearer ${authToken}`
    }
  }
  // Loader Logic to add loader
  if (request.loader) {
    store.dispatch(startLoader(request.loader))
  }
  return request
}
