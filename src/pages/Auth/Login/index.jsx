import { Grid } from '@mui/material'
import { Login1Icon } from 'components/ui-kit/icons/iconComponents/Login1Icon'
import { LoginBg2Icon } from 'components/ui-kit/icons/iconComponents/LoginBg2Icon'
import CustomButton from 'components/ui-kit/Button/index'
import CustomTextField from 'components/ui-kit/TextField'
import CustomTypography from 'components/ui-kit/Typography'
import { LOADER_TYPE, ROUTE_PATHS } from 'constants/index'
import { Link } from 'react-router-dom'
import { ForgotPasswordLinkContainer, LoginContainer, LoginIconContainer, RootLoginContainer, WelcomeTextContainer } from './styles'
import { useLoginController } from './controller/useLoginController'
import AppLoader from 'components/ui-kit/AppLoader'

const Login = () => {
  const { t, handleSubmit, values, handleChange, errors, loginLoading } = useLoginController()

  return (
    <Grid container>
      <Grid item xs={12} lg={6} sx={{ position: 'relative' }}>
        <RootLoginContainer>
          <LoginContainer>
            <CustomTypography
              value={t('login')}
              variant='h3'
              sx={{
                fontWeight: 'bold'
              }}
            />
            <br />
            <CustomTextField
              sx={{ marginBottom: '20px' }}
              label={t('username')}
              placeholder={t('username')}
              variant='outlined'
              fullWidth
              id='username'
              name='username'
              value={values.username}
              onChange={handleChange}
              error={errors.username}
              helperText={errors.username}
              enableValidation={Boolean(values.username || errors.username)}
            />
            <CustomTextField
              sx={{ marginBottom: '20px' }}
              label={t('password')}
              type='password'
              placeholder={t('password')}
              variant='outlined'
              name='password'
              id='password'
              value={values.password}
              onChange={handleChange}
              error={errors.password}
              helperText={errors.password}
              enableValidation={Boolean(values.password || errors.password)}
            />

            <ForgotPasswordLinkContainer>
              <Link to={ROUTE_PATHS.forgotPassword} style={{ textDecoration: 'none' }}>
                <CustomTypography
                  value={t('forgotPassword')}
                  sx={{ fontSize: 14 }}
                />
              </Link>
            </ForgotPasswordLinkContainer>
            <CustomButton
              disabled={Boolean(errors.username) || Boolean(errors.password) || !values.username.length || loginLoading}
              onClick={handleSubmit}
            >
              {
                loginLoading
                  ? <AppLoader variant={LOADER_TYPE.PULSE} size={5} />
                  : <CustomTypography sx={{ fontWeight: 'bold' }} value={t('login')} />
              }
            </CustomButton>
          </LoginContainer>
        </RootLoginContainer>

        <LoginIconContainer>
          <Login1Icon style={{ height: '100%', width: '100%' }} />
        </LoginIconContainer>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: 'none', lg: 'block' },
          position: 'relative'
        }}
      >
        <WelcomeTextContainer>
          <CustomTypography
            variant='h2'
            align='center'
            value={t('WelcomeToOurCommunity')}
            sx={{ color: (theme) => theme.colors.white, padding: '20px' }}
          />
        </WelcomeTextContainer>

        <LoginIconContainer>
          <LoginBg2Icon style={{ height: '100%', width: '100%' }} />
        </LoginIconContainer>
      </Grid>
    </Grid>
  )
}

export default Login
