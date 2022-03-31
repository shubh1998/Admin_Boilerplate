import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LANGUAGES, ROUTE_PATHS } from 'constants/index'
import { getLocalLanguage, setLocalLanguage } from 'helpers/localstorage.helpers'
import { LogoutIcon } from 'components/ui-kit/icons/iconComponents/LogoutIcon'
import { operatorLogout } from 'redux-thunk/thunk/Auth/auth.thunk'
import { useDispatch } from 'react-redux'
import SettingsIcon from '@mui/icons-material/Settings'

const NAV_MENU_OPTIONS = {
  logout: 'logout',
  settings: 'settings',
  profile: 'profile'
}

export const useHeaderController = () => {
  const dispatch = useDispatch()
  const { i18n, t } = useTranslation()
  const navigate = useNavigate()

  const [anchorElUser, setAnchorElUser] = useState(null)
  const [anchorElLanguage, setAnchorElLanguage] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(
    getLocalLanguage() || LANGUAGES[0].languageCode
  )

  const toggleUserMenu = (event, closeMenu) => {
    if (closeMenu) {
      setAnchorElUser(null)
    } else {
      setAnchorElUser(event.currentTarget)
    }
  }

  const toggleLanguageMenu = (event, closeMenu) => {
    if (closeMenu) {
      setAnchorElLanguage(null)
    } else {
      setAnchorElLanguage(event.currentTarget)
    }
  }

  const changeLanguage = (lang) => {
    setAnchorElLanguage(null)
    setLocalLanguage(lang)
    i18n.changeLanguage(lang)
    setSelectedLanguage(lang)
  }

  const menuItems = [
    {
      label: t(NAV_MENU_OPTIONS.settings),
      icon: <SettingsIcon />,
      handler: () => {
        setAnchorElUser(null)
        navigate(ROUTE_PATHS.settings)
      }
    },
    {
      label: t(NAV_MENU_OPTIONS.logout),
      icon: <LogoutIcon />,
      handler: () => {
        setAnchorElUser(null)
        dispatch(operatorLogout({ navigate }))
      }
    }
  ]

  return {
    anchorElUser,
    anchorElLanguage,
    selectedLanguage,
    changeLanguage,
    toggleUserMenu,
    toggleLanguageMenu,
    t,
    navigate,
    NAV_MENU_OPTIONS,
    setAnchorElUser,
    menuItems
  }
}
