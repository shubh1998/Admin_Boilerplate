
import PropTypes from 'prop-types'
import PrivateRoute from './HOC/PrivateRoutes'
import PublicRoutes from './HOC/PublicRoutes'
import { getAuthToken } from 'helpers/cookie.helpers'

const RouteValidator = ({ hasAuth, component: Component, ...props }) => {
  const isAuthenticated = getAuthToken()
  return hasAuth
    ? <PrivateRoute Component={Component} isAuthenticated={isAuthenticated} />
    : <PublicRoutes Component={Component} isAuthenticated={isAuthenticated} />
}

RouteValidator.propTypes = {
  component: PropTypes.elementType.isRequired,
  hasAuth: PropTypes.bool,
  path: PropTypes.string
}

export default RouteValidator
