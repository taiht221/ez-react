import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
}

function PasswordField(props) {
  const { form, name, label, disabled, defaultValue } = props
  const { errors } = form
  const hasError = !!errors[name]
  const [showPassword, setshowPassword] = useState(false)
  const toggleShowPassword = () => {
    setshowPassword(!showPassword)
  }
  return (
    <FormControl error={hasError} fullWidth variant="outlined" margin="normal">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        render={({ onChange, onBlur, value, name }) => (
          <OutlinedInput
            id={name}
            type={showPassword ? 'text' : 'password'}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            defaultValue={defaultValue}
          />
        )}
      />
      <FormHelperText>{errors[name]?.message}</FormHelperText>
    </FormControl>
  )
}

export default PasswordField
