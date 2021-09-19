const defaultOptions = {
  delay: 0,
  timeout: 2000,
  position: 'top-center',
}
export const toastManager = (function () {
  let callbackFn
  const manager = {
    subscribe(callback) {
      callbackFn = callback
    },
    add(content, options) {
      const mergedOptions = { ...defaultOptions, ...options }
      const timeoutId = window.setTimeout(() => {
        callbackFn('ADD', content, { ...mergedOptions, id: timeoutId })
      }, mergedOptions.delay)
      return timeoutId
    },
    remove(id) {
      callbackFn('REMOVE', null, { id })
      return true
    },
  }
  return manager
})()

const toast = {
  show: (content, options) => {
    return toastManager.add(content, options)
  },
  remove: (id) => {
    return toastManager.remove(id)
  },
}

export default toast
