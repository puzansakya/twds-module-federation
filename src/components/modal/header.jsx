import PropTypes from 'prop-types'
const Header = ({ children }) => {
  return <div>{children}</div>
}
Header.propTypes = {
  children: PropTypes.any,
}
export default Header
