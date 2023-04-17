import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, FormControlLabel } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded'
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded'

const CustomCheckbox = ({
  label, onChange, labelPlacement, checked, size, circle, ...otherProps
}) => {
  return (
    <FormControlLabel
      control={(
        <Checkbox
          checked={checked}
          size={size}
          onChange={onChange}
          icon={!circle
            ? <CheckBoxOutlineBlankRoundedIcon sx={{ fill: (theme) => theme.colors.grey400 }} />
            : <CircleIcon sx={{ fill: (theme) => theme.colors.grey400 }} />}
          checkedIcon={!circle
            ? <CheckBoxRoundedIcon />
            : <CircleIcon />}
          {...otherProps}
        />
      )}
      label={label}
      labelPlacement={labelPlacement}
    />
  )
}

export default CustomCheckbox

CustomCheckbox.defaultProps = {
  label: '',
  onChange: () => {},
  labelPlacement: 'end',
  checked: false,
  size: 'medium',
  circle: false
}

CustomCheckbox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelPlacement: PropTypes.oneOf(['bottom', 'end', 'start', 'top']),
  checked: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  circle: PropTypes.bool
}
