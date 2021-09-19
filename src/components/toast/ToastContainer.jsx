import { useEffect, useReducer, useRef } from 'react'
import { createPortal } from 'react-dom'
import { toastManager } from './toast.jsx'
import './index.css'

const ADD = 'ADD'
const REMOVE = 'REMOVE'

const reducer = (state, action) => {
  const { type, data } = action
  if (type === ADD) {
    if (
      state.filter((i) => i.uniqueCode && i.uniqueCode === data.uniqueCode)
        .length
    ) {
      return state
    }
    return [...state, data]
  } else if (type === REMOVE) {
    return state.filter((i) => i.id !== data.id)
  }
  return state
}

const ToastContainer = () => {
  const toastRootElementId = 'react-tiny-toast-main-container'
  const [data, dispatch] = useReducer(reducer, [])
  const toastRef = useRef

  const callback = (actionType, content, options) => {
    if (actionType === ADD) {
      dispatch({
        type: ADD,
        data: { content, ...options, key: `${options.id}` },
      })
    }
    if (options.pause && actionType === REMOVE) {
      dispatch({ type: REMOVE, data: { id: options.id } })
    } else if (!options.pause) {
      window.setTimeout(() => {
        dispatch({ type: REMOVE, data: { id: options.id } })
      }, options.timeout)
    }
  }

  useEffect(() => {
    toastManager.subscribe(callback)
  }, [])

  useEffect(() => {
    const node = document.createElement('div')
    node.setAttribute('id', toastRootElementId)
    document.body.appendChild(node)
    toastRef.current = node
    return () => document.body.removeChild(node)
  }, [toastRef])

  const positionMaintainer = () => {
    const mapper = {}
    data.forEach(({ position, ...rest }) => {
      if (position) {
        if (!mapper[position]) mapper[position] = []
        mapper[position].push(rest)
      }
    })
    return mapper
  }

  const markup = () => {
    const mapper = positionMaintainer()
    return Object.keys(mapper).map((position, index) => {
      const content = mapper[position].map(
        ({ key, content, variant = 'default', className }) => {
          let variantBackground = {
            default: 'bg-blue-100 text-blue-700 ',
            success: 'bg-green-100 text-green-700',
            danger: 'bg-red-100 text-red-700',
            warning: 'bg-yellow-100 text-yellow-700',
          }
          let animationCssClass = 'toast-item-animation-top'
          if (position.indexOf('bottom'))
            animationCssClass = 'toast-item-animation-bottom'
          return (
            <div
              key={key}
              className={`rounded-lg p-4 mb-4 flex ${
                variantBackground[variant]
              } ${animationCssClass} ${className ? className : ''}`}
            >
              {content}
            </div>
          )
        }
      )
      return (
        <div key={index} className={`toast-container ${position}`}>
          {content}
        </div>
      )
    })
  }

  if (!toastRef.current) return null
  return createPortal(markup(), toastRef.current)
}

export default ToastContainer
