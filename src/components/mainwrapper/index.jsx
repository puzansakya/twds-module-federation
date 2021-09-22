import PropTypes from 'prop-types'

const MainWrapper = ({ children }) => {
  return (
    <div className='min-h-screen bg-gradient-to-tr from-gray-900 to-gray-700 text-white'>
      {children}
    </div>
  )
}

MainWrapper.propTypes = {
  children: PropTypes.any,
}

export default MainWrapper
