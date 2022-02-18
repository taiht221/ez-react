import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField'
import { Controller } from 'react-hook-form'

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
}

function InputField(props) {
  const { form, name, label, disabled } = props
  const { errors } = form.formState
  const hasError = errors[name]
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ onChange, onBlur, value, name }) => (
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={errors[name]?.message}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    >
      <TextField />
    </Controller>
  )
}

export default InputField
