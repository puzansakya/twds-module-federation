import { usePopper } from 'react-popper'
import { ScrollNumber } from './components/ScrollNumber.jsx'
import { useTimePicker } from './useTimePicker.jsx'
import PropTypes from 'prop-types'

const TimePicker = ({
  value,
  showHour = true,
  showMin = true,
  showSec = true,
  format = '12hr',
  onChange,
}) => {
  const {
    expanded,
    setExpanded,
    referenceElement,
    setReferenceElement,
    popperElement,
    setPopperElement,
    handleHrClick,
    handleMinClick,
    handleSecClick,
    handleAmPmClick,
    handleInputChange,
    state,
  } = useTimePicker({ value, onChange })

  const { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <div className='flex flex-col space-y-2'>
      <label className='text-white'>{state.defaultVal}</label>
      <input
        onFocus={() => {
          setExpanded(true)
        }}
        className='rounded-md text-black px-3 py-1 border border-gray-500 focus:border-blue-500 outline-none'
        value={state.defaultVal}
        onChange={handleInputChange}
        ref={setReferenceElement}
      />
      {expanded && (
        <div className='fixed inset-0 ' onClick={() => setExpanded(false)} />
      )}
      {expanded && (
        <div
          ref={setPopperElement}
          style={{ ...styles.popper, zIndex: 3 }}
          {...attributes.popper}
        >
          <div className=' bg-white flex h-40'>
            {showHour && (
              <ScrollNumber
                length={24}
                key='hr'
                handleNumClick={handleHrClick}
                selectedValue={state.hr}
              />
            )}
            {showMin && (
              <ScrollNumber
                length={60}
                key='min'
                handleNumClick={handleMinClick}
                selectedValue={state.min}
              />
            )}
            {showSec && (
              <ScrollNumber
                length={60}
                key='sec'
                handleNumClick={handleSecClick}
                selectedValue={state.sec}
              />
            )}

            {format === '12hr' && (
              <ul className='overflow-y-scroll h-40 text-black'>
                <li
                  className={`${
                    'am' === state.modulation
                      ? 'px-4 py-2 hover:bg-blue-400 bg-blue-500 text-white'
                      : 'px-4 py-2 hover:bg-gray-200'
                  }`}
                  onClick={() => handleAmPmClick('am')}
                >
                  am
                </li>
                <li
                  className={`${
                    'pm' === state.modulation
                      ? 'px-4 py-2 hover:bg-blue-400 bg-blue-500 text-white'
                      : 'px-4 py-2 hover:bg-gray-200'
                  }`}
                  onClick={() => handleAmPmClick('pm')}
                >
                  pm
                </li>
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

TimePicker.propTypes = {
  value: PropTypes.any,
  showHour: PropTypes.bool,
  showMin: PropTypes.bool,
  showSec: PropTypes.bool,
  format: PropTypes.string,
  onChange: PropTypes.func,
}

export default TimePicker
