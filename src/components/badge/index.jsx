import PropTypes from 'prop-types'
const Badge = ({ color = 'red', text = 'Default' }) => {
  const colorCollection = {
    blue: 'bg-blue-100',
    gray: 'bg-gray-100',
    red: 'bg-red-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
    indigo: 'bg-indigo-100',
    purple: 'bg-purple-100',
    pink: 'bg-pink-100',
  }
  return (
    <span
      className={`${colorCollection[color]} text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md`}
    >
      {text}
    </span>
  )
}
Badge.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
}
export default Badge
