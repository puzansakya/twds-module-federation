import { useRef } from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'
// import Header from './header.jsx'
// import Content from './Content.jsx'
// import Footer from './footer.jsx'

const Modal = ({ children, show, close }) => {
  const nodeRef = useRef(null)

  const content = show && (
    <div className='fixed inset-0 overflow-y-auto'>
      <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
        <div
          className='overlay fixed inset-0 transition-opacity'
          aria-hidden='true'
          onClick={close}
        >
          <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
        </div>

        <span
          className='hidden sm:inline-block sm:align-middle sm:h-screen'
          aria-hidden='true'
        >
          &#8203;
        </span>

        <div
          className='inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all align-middle'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-headline'
        >
          <div>{children}</div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {createPortal(
        <CSSTransition
          nodeRef={nodeRef}
          in={show}
          timeout={120}
          classNames='modal-transition'
          unmountOnExit
        >
          {() => <div>{content}</div>}
        </CSSTransition>,
        document.body
      )}
    </>
  )
}

// Modal.Header = Header
// Modal.Content = Content
// Modal.Footer = Footer
Modal.propTypes = {
  children: PropTypes.any,
  show: PropTypes.bool,
  close: PropTypes.func,
}
export default Modal
