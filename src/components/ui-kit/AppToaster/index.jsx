import React from 'react'
import { createPortal } from 'react-dom'
import { Alert, Slide, Snackbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { notificationRoot } from 'assets/dom/domNodes'
import { handleToaster } from 'redux-thunk/redux/Toaster/toaster.slice'

const TransitionLeft = (props) => {
  return <Slide {...props} direction='right' />
}

export const Toaster = ({ openToaster, toasterType, toasterMessage, handleToasterClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      autoHideDuration={3000}
      onClose={handleToasterClose}
      open={openToaster}
      style={{ maxWidth: '95vw', width: 'fit-content', padding: 0 }}
      TransitionComponent={TransitionLeft}
    >
      <Alert
        id={`toaster_${toasterType}`}
        style={{
          fontSize: 16,
          opacity: 0.95
        }}
        variant='filled'
        onClose={handleToasterClose}
        severity={toasterType}
      >
        {toasterMessage}
      </Alert>
    </Snackbar>
  )
}

export const AppToaster = () => {
  const dispatch = useDispatch()
  const { openToaster, toasterMessage, toasterType } = useSelector(state => state.toaster)

  const handleToasterClose = () => {
    dispatch(handleToaster({ openToaster: false, toasterMessage, toasterType }))
  }

  return notificationRoot
    ? createPortal(<Toaster openToaster={openToaster} toasterMessage={toasterMessage} toasterType={toasterType} handleToasterClose={handleToasterClose} />, notificationRoot)
    : <></>
}

export default AppToaster
