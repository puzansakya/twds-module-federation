import PropTypes from 'prop-types'

const StackY = ({ children, gap }) => {
  const getYGap = () => {
    switch (gap) {
      case 1:
        return 'space-y-1'
      case 2:
        return 'space-y-2'
      case 3:
        return 'space-y-3'
      case 4:
        return 'space-y-4'
      case 5:
        return 'space-y-5'
      case 6:
        return 'space-y-6'
      case 7:
        return 'space-y-7'
      case 8:
        return 'space-y-8'
      default:
        return 'space-y-4'
    }
  }

  return (
    <div className={`flex flex-col items-start ${getYGap()}`}>{children}</div>
  )
}

StackY.propTypes = {
  children: PropTypes.any,
  gap: PropTypes.number,
}
export default StackY
