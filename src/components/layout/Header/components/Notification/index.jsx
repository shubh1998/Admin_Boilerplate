import { NotificationIcon } from 'components/ui-kit/icons/iconComponents/NotificationIcon'
import { useDispatch } from 'react-redux'
import { StyledIconButton } from 'components/layout/Header/styles'
import { openWarningToaster } from 'helpers/toaster.helpers'

const Notification = () => {
  const dispatch = useDispatch()

  const showNotification = () => {
    openWarningToaster(dispatch, 'You don\'t have any pending notification !!')
  }

  return (
    <StyledIconButton onClick={showNotification}>
      <NotificationIcon style={{ width: 20, height: 20 }} />
    </StyledIconButton>
  )
}

export default Notification
