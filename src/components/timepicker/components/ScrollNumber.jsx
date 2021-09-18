import { createRef, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ScrollNumber = ({
  selectedValue,
  key,
  handleNumClick,
  length,
}) => {
  const containerRef = createRef()

  const nums = Array.from({ length: length }, (_, i) => i)
  const numRefs = nums.reduce((acc, value) => {
    acc[`${key}-${value}`] = createRef()
    return acc
  }, {})

  const focusNumber = useCallback(
    (num) => {
      const rect = numRefs[`${key}-${num}`].current.getBoundingClientRect()

      containerRef?.current.scrollTo(0, rect.height * num)
    },
    [containerRef, numRefs, key]
  )

  useEffect(() => {
    if (selectedValue) {
      focusNumber(selectedValue)
    }
  }, [selectedValue, focusNumber])

  const onNumClick = (number) => {
    handleNumClick(number)
    focusNumber(number)
  }

  return (
    <ul
      className='overflow-y-scroll h-40 text-black'
      style={{
        scrollBehavior: 'smooth',
      }}
      ref={containerRef}
    >
      {nums.map((n) => {
        return (
          <li
            ref={numRefs[`${key}-${n}`]}
            key={`${key}-${n}`}
            className={`${
              n === selectedValue
                ? 'px-4 py-2 hover:bg-blue-400 bg-blue-500 text-white'
                : 'px-4 py-2 hover:bg-gray-200'
            }`}
            onClick={() => onNumClick(n)}
          >
            {n}
          </li>
        )
      })}
    </ul>
  )
}

ScrollNumber.propTypes = {
  selectedValue: PropTypes.any,
  key: PropTypes.string,
  handleNumClick: PropTypes.func,
  length: PropTypes.number,
}
