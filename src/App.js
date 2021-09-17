import React from 'react'

import './app.styles.scss'

const Badge = React.lazy(() => import('remote/Badge'))

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900 text-white'>
      <div>
        Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass, with
        a hot dev server and an optimized production build.
      </div>
      <React.Suspense fallback='Loading Badge...'>
        <Badge />
      </React.Suspense>
    </div>
  )
}

export default App
