import './app.styles.scss'
import Menu from './components/menu/index.jsx'
import Popper from './components/popper/index.jsx'

import CheckboxGroupSection from './section/CheckboxGroupSection.jsx'

const App = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900 text-white'>
      <div className='space-y-4'>
        <div>
          Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass,
          with a hot dev server and an optimized production build.
        </div>
        <div>
          <CheckboxGroupSection />
        </div>
        <Popper
          trigger={
            <button className='px-3 py-1 bg-green-500 rounded-md hover:bg-green-400 text-white'>
              Open popper
            </button>
          }
          content={
            <Menu width={'w-64'}>
              <Menu.MenuItem active label='Enim ut tellus' />
              <Menu.MenuItem label='Ultrices gravida dictum' />
              <Menu.MenuItem label='Eu sem integer vitae' />
              <Menu.MenuItem label='Excepteur sint' />
              <Menu.MenuItem label='Vitae justo eget' />
            </Menu>
          }
        ></Popper>
      </div>
    </div>
  )
}

export default App
