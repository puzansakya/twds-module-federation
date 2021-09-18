import PropTypes from 'prop-types'
const Seperator = ({ spacing = 'p-0' }) => {
  return <div className={`h-px w-full bg-gray-500 ${spacing}`}></div>
}

Seperator.propTypes = {
  spacing: PropTypes.string,
}

export default Seperator
