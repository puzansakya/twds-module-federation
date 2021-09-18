import { Controller } from 'react-hook-form'
import { isEmpty, regex, resolveObjectValueByPath } from '../../helpers'
import PropTypes from 'prop-types'

// COMPONENTS
import TextInput from './textInput.jsx'

const Input = ({
  inputName = 'textinput',
  name,
  label,
  type,
  alignment = 'vertical',
  className,
  wrapperClassName,
  labelClassName,
  width,
  disabled = false,
  control,
  ignoreControl = false,
  required = false,
  errors,
  ...rest
}) => {
  const error = errors && resolveObjectValueByPath(errors, name)?.message

  const getClassNames = () => {
    let classNameStr = 'genericForm-group'

    if (disabled) {
      classNameStr += 'input-group-disabled'
    }
    if (!isEmpty(error) && error) {
      classNameStr += 'error'
    }
    if (alignment && alignment == 'horizontal') {
      classNameStr += 'horizontalGenericForm'
    }

    if (className) {
      classNameStr += className
    }
    return classNameStr
  }

  let InputComponent = getInputComponent(inputName)

  return (
    <div className={getClassNames()} style={{ width }}>
      {label && (
        <div
          className={`${
            wrapperClassName ? wrapperClassName : 'genericForm-group__label'
          }`}
        >
          <label
            htmlFor={name}
            className={`${
              labelClassName ? labelClassName : 'genericForm-group__label'
            }`}
          >
            {label}
            {required ? ' *' : ''}
          </label>
        </div>
      )}

      {InputComponent && (
        <>
          {!control || ignoreControl ? (
            <InputComponent {...rest} />
          ) : (
            <Controller
              control={control}
              name={name}
              rules={{
                required: {
                  value: required,
                  message: 'required',
                },
                pattern: {
                  value: type === 'email' && regex.Email ? '' : required,
                  message: 'invalid e-mail',
                },
              }}
              render={(controllerProps) => {
                const {
                  field: { onChange, value },
                } = controllerProps

                return (
                  <InputComponent
                    {...rest}
                    value={value}
                    onChangeRHF={onChange}
                  />
                )
              }}
            />
          )}
        </>
      )}

      {error && <div className='genericForm-group__message'>{error}</div>}
    </div>
  )
}

const getInputComponent = (inputName) => {
  let components = {
    textinput: TextInput,
  }

  return components[inputName]
}

Input.propTypes = {
  inputName: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  alignment: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  width: PropTypes.string,
  disabled: PropTypes.bool,
  control: PropTypes.any,
  ignoreControl: PropTypes.bool,
  required: PropTypes.bool,
  errors: PropTypes.any,
}
export default Input
