import errorMessages from './errorMessages'

const errorCodeMappedViaMessage = new Map([
  // common errors for all the backend services
  [600, errorMessages.internalServerError],
  [601, errorMessages.usernameOrEmailNotMatch],

  // errors for user service
  [1001, errorMessages.userAlreadyExists],
  [1002, errorMessages.userNotExists]
])

export default errorCodeMappedViaMessage
