import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { ProfileIcon } from 'components/ui-kit/icons/iconComponents/ProfileIcon'
import CustomTypography from 'components/ui-kit/Typography'
import { useHeaderController } from '../../controller/useHeaderController'
import { StyledMenu, StyledProfileDiv, StyledMenuItem } from 'components/layout/Header/styles'

const ProfileMenu = () => {
  const { anchorElUser, toggleUserMenu, menuItems } = useHeaderController()

  return (
    <>
      <StyledProfileDiv
        onClick={toggleUserMenu}
      >
        <>
          <ProfileIcon style={{ width: 20, height: 20 }} />
          User Admin
          {!anchorElUser ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </>
      </StyledProfileDiv>
      <StyledMenu
        mt='45px'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={Boolean(anchorElUser)}
        onClose={e => toggleUserMenu(e, true)}
      >
        {menuItems.map((menuItem) => (
          <StyledMenuItem
            key={menuItem.label}
            onClick={() => {
              menuItem.handler()
            }}
            width='160px'
          >
            {menuItem.icon}
            <CustomTypography align='center' sx={{ ml: 1 }} value={menuItem.label} />
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  )
}

export default ProfileMenu
