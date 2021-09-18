import PropTypes from 'prop-types'

const Content = ({ children }) => {
  return <div className='max-h-96 overflow-y-scroll'>{children}</div>
}
Content.propTypes = {
  children: PropTypes.any,
}
export default Content
