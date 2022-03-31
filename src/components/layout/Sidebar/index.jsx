import React from 'react'
import { Box } from '@mui/material'
import { routerList } from 'routes/routerList'
import { useSidebarController } from './controller/useSidebarController'
import CustomList from './components/CustomList'
import AppDrawer from 'components/ui-kit/AppDrawer'
import ContactInfo from 'pages/ContactInfo'

const Sidebar = () => {
  const { t, location, expandedMenuItem, handleDrawerOptions, toggleSideNavbar, isSideBarOpen } = useSidebarController()

  return (
    <AppDrawer
      openDrawer={isSideBarOpen}
      handleDrawer={toggleSideNavbar}
      text={t('admin')}
      isMobileView={!isSideBarOpen}
    >
      <Box>
        <CustomList
          t={t}
          location={location}
          list={routerList}
          handleDrawerOptions={handleDrawerOptions}
          expandedMenuItem={expandedMenuItem}
        />
        <ContactInfo t={t} />
      </Box>
    </AppDrawer>
  )
}

export default Sidebar
