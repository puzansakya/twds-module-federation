import React, { useState } from 'react'
import { usePopper } from 'react-popper'
import PropTypes from 'prop-types'

// HOOKS
import { useDisclosure } from '../../hooks/useDisclosure.jsx'

const Popper = ({ trigger, content }) => {
  const { isOpen, open, close } = useDisclosure()

  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <>
      {React.cloneElement(trigger, {
        ref: (ref) => setReferenceElement(ref),
        onClick: () => {
          open()
        },
      })}

      {isOpen && <div className=' fixed inset-0 ' onClick={() => close()} />}
      {isOpen && (
        <div
          ref={setPopperElement}
          style={{ ...styles.popper, zIndex: 3 }}
          {...attributes.popper}
        >
          {React.cloneElement(content, {
            ...content.props,
            children: content.props.children.map((child, idx) => {
              return React.cloneElement(child, {
                ...child.props,
                key: `menu-item-${idx + 1}`,
                onClick: () => {
                  console.log(`${idx + 1} clicked`)
                  close()
                },
              })
            }),
          })}
        </div>
      )}
    </>
  )
}
Popper.propTypes = {
  content: PropTypes.any,
  trigger: PropTypes.any,
}
export default Popper
