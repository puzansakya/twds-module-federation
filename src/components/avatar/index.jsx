import PropTypes from 'prop-types'
const Avatar = ({ name, imgsrc }) => {
  let bgs = ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500']

  const getRandomBg = () => {
    return bgs[Math.floor(Math.random() * 4)]
  }

  if (imgsrc) {
    return (
      <div className='flex-shrink-0 h-8 w-8 '>
        <img
          className='h-8 w-8 rounded-full ring-2 ring-white'
          src={imgsrc}
          alt=''
        />
      </div>
    )
  }
  return (
    <div
      className={`flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full ring-2 ring-white text-white ${getRandomBg()}`}
    >
      <span>{name.charAt(0)}</span>
    </div>
  )
}

Avatar.propTypes = {
  name: PropTypes.string,
  imgsrc: PropTypes.string,
}
export default Avatar
