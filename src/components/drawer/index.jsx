import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const Drawer = ({ children, open, close, placement = 'left' }) => {
  const content = (
    <div className='sidebar absolute top-0 bottom-0 w-full'>
      <div className='sidebar__wrapper relative w-full h-full overflow-hidden'>
        <div
          className='sidebar__overlay overlay h-full bg-black bg-opacity-20'
          onClick={() => close()}
        ></div>
        <div
          className={`drawer sidebar__content bg-white absolute top-0 ${
            placement === 'right' ? 'right-0 right' : 'left'
          }  w-60 h-full text-gray-800 transform transition`}
        >
          {children}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {createPortal(
        <CSSTransition
          in={open}
          timeout={200}
          classNames='drawer-transition'
          unmountOnExit
        >
          {() => <div>{content}</div>}
        </CSSTransition>,
        document.body
      )}
    </>
  )
}

Drawer.propTypes = {
  children: PropTypes.any,
  open: PropTypes.bool,
  close: PropTypes.func,
  placement: PropTypes.string,
}

export default Drawer
