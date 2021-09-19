import './app.styles.scss'
import Drawer from './components/drawer/index.jsx'
import Menu from './components/menu/index.jsx'
import Popper from './components/popper/index.jsx'
import { useDisclosure } from './hooks/useDiscloser.jsx'

import CheckboxGroupSection from './section/CheckboxGroupSection.jsx'

const App = () => {
  const { isOpen, open, close } = useDisclosure()
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900 text-white'>
      <div className='space-y-4 flex flex-col items-start'>
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

        <button
          className='px-3 py-1 bg-green-500 rounded-md hover:bg-green-400 text-white'
          onClick={() => {
            open()
          }}
        >
          Open Drawer
        </button>

        <Drawer open={isOpen} close={() => close()}>
          <div className='p-4'>
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.&quot;
          </div>
        </Drawer>
      </div>
    </div>
  )
}

export default App
