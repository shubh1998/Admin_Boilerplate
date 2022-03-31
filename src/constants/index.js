import { EnglishIcon } from 'components/ui-kit/icons/iconComponents/EnglishIcon'
import { FrenchIcon } from 'components/ui-kit/icons/iconComponents/FrenchIcon'

/* ==========================================================================
  LANGUAGES
  ========================================================================== */
const LANGUAGES = [
  { label: 'English', languageCode: 'en', flag: EnglishIcon },
  { label: 'French', languageCode: 'fr', flag: FrenchIcon }
]

/* ==========================================================================
  HTTP Method Types
========================================================================== */
const METHOD_TYPES = {
  get: 'get',
  post: 'post',
  put: 'put',
  delete: 'delete',
  patch: 'patch'
}

/* ==========================================================================
LocalStorage / Cookie data
========================================================================== */
const TOKEN = 'authtoken'
const LANGUAGE = 'language'

/* ==========================================================================
Loader types
========================================================================== */
const LOADER_TYPE = {
  SCALE: 'scale',
  PULSE: 'pulse'
}

/* ==========================================================================
  TOASTER / NOTIFICATION
========================================================================== */
const TOASTER_TYPE = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
}

/* ==========================================================================
  Loader Type Array
========================================================================== */
const LOADER_HANDLER_TYPES = {
  page: 'pageLoader',
  submit: 'submitButtonLoader',
  table: 'tableLoader'
}

/* ==========================================================================
  All the navigation route Paths
========================================================================== */
const gamesSectionParentRoute = '/games'

const ROUTE_PATHS = {
  // ----single routes------------
  rootPath: '/',
  login: '/login',
  settings: '/settings',
  dashboard: '/dashboard',
  profile: '/profile',
  changePassword: '/change-password',
  forgotPassword: '/forgot-password',
  // ----games section parent child routes------------
  games: gamesSectionParentRoute,
  perRoundReportReports: `${gamesSectionParentRoute}/pre-round-reports`,
  cancelledGames: `${gamesSectionParentRoute}/cancelled-games`
}

export {
  TOASTER_TYPE,
  LANGUAGES,
  TOKEN,
  LANGUAGE,
  ROUTE_PATHS,
  LOADER_TYPE,
  METHOD_TYPES,
  LOADER_HANDLER_TYPES
}
