import MenuIcon from '@mui/icons-material/Menu'
import AppHeader from 'components/ui-kit/AppHeader'
import { useDispatch, useSelector } from 'react-redux'
import LanguageMenu from './components/LanguageMenu'
import ProfileMenu from './components/ProfileMenu'
import Notification from './components/Notification'
import { RightSideOptionContainer, StyledIconButton } from './styles'
import { handleDrawerToggle } from 'redux-thunk/redux/Ham/ham.slice'

const Header = () => {
  const dispatch = useDispatch()
  const isSideNavOpen = useSelector(state => state.ham.openHam)

  const handleDrawer = () => {
    dispatch(handleDrawerToggle())
  }

  return (
    <AppHeader
      openDrawer={isSideNavOpen}
      handleDrawer={handleDrawer}
      left={
        !isSideNavOpen
          ? (
            <StyledIconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawer}
              edge='start'
              mr={2}
            >
              <MenuIcon />
            </StyledIconButton>
            )
          : <></>
      }
      right={
        <RightSideOptionContainer>
          <LanguageMenu />
          <Notification />
          <ProfileMenu />
        </RightSideOptionContainer>
      }
    />
  )
}

export default Header
