import * as yup from 'yup'
import { useFormik } from 'formik'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from 'redux-thunk/thunk/Auth/auth.thunk'
import { LOADER_HANDLER_TYPES } from 'constants/index'

export const useChangePasswordController = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { [LOADER_HANDLER_TYPES.submit]: updatePasswordLoading } = useSelector(state => state.loader)

  const changePasswordSchema = yup.object({
    currentPassword: yup
      .string()
      .label(t('currentPassword'))
      .min(4, (props) => t('mustbeAtleast4Characters', { ...props, minNumber: 4 }))
      .max(32, (props) => t('cannotExceed32Characters', { ...props, maxNumber: 32 }))
      .required((props) => t('isRequired', props)),
    newPassword: yup
      .string()
      .label(t('newPassword'))
      .min(4, (props) => t('mustbeAtleast4Characters', { ...props, minNumber: 4 }))
      .max(32, (props) => t('cannotExceed32Characters', { ...props, maxNumber: 32 }))
      .required((props) => t('isRequired', props)),
    confirmPassword: yup
      .string()
      .label(t('confirmPassword'))
      .min(4, (props) => t('mustbeAtleast4Characters', { ...props, minNumber: 4 }))
      .max(32, (props) => t('cannotExceed32Characters', { ...props, maxNumber: 32 }))
      .required((props) => t('isRequired', props))
      .oneOf([yup.ref('newPassword'), null], t('passwordsMustMatch'))
  })

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    validationSchema: changePasswordSchema,
    onSubmit: async ({ currentPassword, newPassword, confirmPassword }) => {
      const values = { oldPassword: currentPassword, newPassword }
      dispatch(updatePassword(values))
    }
  })

  return {
    handleSubmit,
    values,
    handleChange,
    errors,
    t,
    updatePasswordLoading
  }
}
