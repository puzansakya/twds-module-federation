import PropTypes from 'prop-types'

const StackX = ({ children, gap }) => {
  const getXGap = () => {
    switch (gap) {
      case 1:
        return 'space-x-1'
      case 2:
        return 'space-x-2'
      case 3:
        return 'space-x-3'
      case 4:
        return 'space-x-4'
      case 5:
        return 'space-x-5'
      case 6:
        return 'space-x-6'
      case 7:
        return 'space-x-7'
      case 8:
        return 'space-x-8'
      default:
        return 'space-x-4'
    }
  }

  return <div className={`flex flex-wrap ${getXGap()}`}>{children}</div>
}

StackX.propTypes = {
  children: PropTypes.any,
  gap: PropTypes.number,
}
export default StackX
