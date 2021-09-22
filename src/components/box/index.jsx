import PropTypes from 'prop-types'

const Box = ({ children, boxClass }) => {
  return <div className={boxClass}>{children}</div>
}

Box.propTypes = {
  children: PropTypes.any,
  boxClass: PropTypes.string,
}
export default Box
