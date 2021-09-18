import { useState } from 'react'
import { usePopper } from 'react-popper'

const Popper = () => {
  const [expanded, setExpanded] = useState(false)

  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement)
  return (
    <>
      <button
        className='custom-increment-btn'
        ref={setReferenceElement}
        onClick={() => {
          setExpanded(true)
        }}
      >
        Custom increment btn 2
      </button>
      {expanded && (
        <div className=' fixed inset-0 ' onClick={() => setExpanded(false)} />
      )}
      {expanded && (
        <div
          ref={setPopperElement}
          style={{ ...styles.popper, zIndex: 3 }}
          {...attributes.popper}
        >
          <div className='bg-white p-4'>
            <p>popper</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Popper
