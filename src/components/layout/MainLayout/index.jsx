import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, Toolbar } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useDispatch, useSelector } from 'react-redux'
import { handleDrawerHamValue } from 'redux-thunk/redux/Ham/ham.slice'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Main, StyledBox, StyledMainLayoutChildren } from './styles'

const MainLayout = ({ children }) => {
  const dispatch = useDispatch()
  const isSideNavOpen = useSelector(state => state.ham.openHam)
  const matches = useMediaQuery((theme) => theme.breakpoints.down('lg'))

  const handleDrawerToggle = (value) => {
    dispatch(handleDrawerHamValue(value))
  }

  useEffect(() => {
    if (matches) {
      handleDrawerToggle(false)
    }
    // eslint-disable-next-line
  }, [matches])

  return (
    <StyledBox display='flex'>
      <CssBaseline />
      <Header />
      <Sidebar isMobileView={matches} />
      <StyledBox
        component={Main}
        open={!matches ? isSideNavOpen : true}
        flexGrow={1}
        padding={3}
        height='100vh'
      >
        <Toolbar />
        <StyledMainLayoutChildren>
          {children}
        </StyledMainLayoutChildren>
      </StyledBox>
    </StyledBox>
  )
}

MainLayout.defaultProps = {
  children: 'null'
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default MainLayout
