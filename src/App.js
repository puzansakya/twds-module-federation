import './app.styles.scss'

import CheckboxGroupSection from './section/CheckboxGroupSection.jsx'

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900 text-white'>
      <div>
        <div>
          Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass,
          with a hot dev server and an optimized production build.
        </div>
        <div>
          <CheckboxGroupSection />
        </div>
      </div>
    </div>
  )
}

export default App
