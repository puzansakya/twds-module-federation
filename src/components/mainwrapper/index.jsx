import PropTypes from 'prop-types'

const MainWrapper = ({ children }) => {
  return (
    <div className='h-screen bg-gradient-to-tr from-gray-900 to-gray-700  flex items-center justify-center text-white'>
      {children}
    </div>
  )
}

MainWrapper.propTypes = {
  children: PropTypes.any,
}

export default MainWrapper
