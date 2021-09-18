import PropTypes from 'prop-types'
import Seperator from '../seperator/index.jsx'

const MenuItem = ({ label, active, ...props }) => {
  return (
    <div
      {...props}
      className={`flex items-center space-x-2 p-2 cursor-pointer rounded-md ${
        active ? 'bg-indigo-600 text-white' : 'text-gray-900 hover:bg-blue-100'
      }`}
    >
      <svg
        className={`${active ? 'block' : 'invisible'}`}
        width='20'
        height='20'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M16.3283 5.22349C16.6363 5.52561 16.6411 6.02024 16.339 6.32829L8.37026 14.4533C8.22426 14.6022 8.0248 14.6865 7.81629 14.6875C7.60778 14.6885 7.40752 14.6061 7.26007 14.4587L3.35382 10.5524C3.04873 10.2473 3.04873 9.75267 3.35382 9.44757C3.65892 9.14248 4.15358 9.14248 4.45868 9.44757L7.80711 12.796L15.2235 5.23421C15.5256 4.92617 16.0202 4.92137 16.3283 5.22349Z'
          fill='white'
        />
      </svg>
      <p>{label}</p>
    </div>
  )
}

const OptionItem = ({ label, more, danger }) => {
  return (
    <div
      className={`flex justify-between hover:bg-blue-50 items-center text-gray-900 p-2 cursor-pointer rounded-md`}
    >
      <p className={`${danger ? 'text-red-500' : ''}`}>{label}</p>
      {more && (
        <svg
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M7.32757 4.82757C7.65301 4.50214 8.18065 4.50214 8.50609 4.82757L13.0894 9.41091C13.4149 9.73634 13.4149 10.264 13.0894 10.5894L8.50609 15.1728C8.18065 15.4982 7.65301 15.4982 7.32757 15.1728C7.00214 14.8473 7.00214 14.3197 7.32757 13.9942L11.3217 10.0002L7.32757 6.00609C7.00214 5.68065 7.00214 5.15301 7.32757 4.82757Z'
            fill='#1E202C'
          />
        </svg>
      )}
    </div>
  )
}

const Menu = ({ children, width, ...props }) => {
  return (
    <div
      className={`bg-white p-2 space-y-1 rounded-md menu__shadow ${
        width ? width : ''
      }`}
      {...props}
    >
      {children}
    </div>
  )
}

Menu.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
}

MenuItem.propTypes = {
  label: PropTypes.string,
  active: PropTypes.bool,
}

OptionItem.propTypes = {
  label: PropTypes.string,
  more: PropTypes.bool,
  danger: PropTypes.bool,
}

Menu.OptionItem = OptionItem
Menu.MenuItem = MenuItem
Menu.Seperator = Seperator

export default Menu
