import React from 'react'
import PropTypes from 'prop-types'

const TextInput = (props) => {
  const {
    name,
    value,
    type,
    autoFocus,
    placeholder,
    inputClassName,
    disabled,

    onChange,
    onChangeRHF,
  } = props

  const handleChange = (evt) => {
    const { name, value } = evt.target
    onChangeRHF && onChangeRHF(value)
    onChange && onChange(name, value)
  }

  return (
    <div className='flex'>
      <input
        className={`${
          inputClassName
            ? inputClassName
            : 'bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
        }`}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value && value}
        autoFocus={autoFocus}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  )
}

TextInput.defaultProps = {
  notFormGroup: false,
  name: '',
  value: '',
  type: 'text',
  autoFocus: false,
  placeholder: '',
}

TextInput.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onChangeRHF: PropTypes.func,
}
export default React.memo(TextInput)
