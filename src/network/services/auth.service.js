import { LOADER_HANDLER_TYPES, METHOD_TYPES } from 'constants/index'
import axiosInstanceService from 'network/apis/index'
import { microServices } from 'network/apis/microservice/index'
import successMessages from 'network/messages/successMessages'

/**
 * Service to do login
 * @param {object} data - object contains username and password
 */
export const loginService = (data) => {
  return axiosInstanceService(METHOD_TYPES.post, '/auth/login', data, {
    server: microServices.SERVICE_URL_1,
    handlerEnabled: false,
    loader: LOADER_HANDLER_TYPES.submit,
    successMessage: successMessages.login
  })
}

/**
 * Service to do logout
 */
export const logoutService = () => {
  return axiosInstanceService(METHOD_TYPES.post, '/auth/logout', {}, {
    server: microServices.SERVICE_URL_1,
    loader: LOADER_HANDLER_TYPES.page,
    successMessage: successMessages.logout
  })
}

/**
 * Service to fetch user information
*/
export const userInformationService = () => {
  return axiosInstanceService(METHOD_TYPES.get, '/profile/get-user', {}, {
    server: microServices.SERVICE_URL_1,
    loader: LOADER_HANDLER_TYPES.page
  })
}

/**
 * Service to change password
 * @param {object} data - object contains old and new password
 */
export const updatePasswordService = (data) => {
  return axiosInstanceService(METHOD_TYPES.put, '/auth/update-password', data, {
    server: microServices.SERVICE_URL_1,
    loader: LOADER_HANDLER_TYPES.submit
  }
  )
}
