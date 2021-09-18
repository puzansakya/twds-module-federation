const HeroIcon = ({ name }) => {
  let icons = {
    chevronUp: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M5 15l7-7 7 7'
        />
      </svg>
    ),
    chevronDown: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-4 w-4'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M19 9l-7 7-7-7'
        />
      </svg>
    ),
    star: (
      <svg
        width='24'
        height='24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 15.067l4.947 3.6-1.894-5.814L20 9.333h-6.067l-1.933-6-1.933 6H4l4.947 3.52-1.894 5.814 4.947-3.6z'
          fill='#E99A36'
        />
      </svg>
    ),
  }
  return name !== undefined ? icons[name] : null
}

export default HeroIcon
