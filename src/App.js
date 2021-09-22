import { useEffect } from 'react'
import './app.styles.scss'

// COMPONENTS
import Drawer from './components/drawer/index.jsx'
import Box from './components/box/index.jsx'
import Menu from './components/menu/index.jsx'
import Popper from './components/popper/index.jsx'
import MainWrapper from './components/mainwrapper/index.jsx'
import StackY from './components/stackY/index.jsx'
import StackX from './components/stackX/index.jsx'
import CheckboxGroupSection from './section/CheckboxGroupSection.jsx'
import TableSection from './section/TableSection.jsx'
import { ToastContainer, toast } from './components/toast/index.jsx'

// hooks
import { useDisclosure } from './hooks/useDisclosure.jsx'

const App = () => {
  const { isOpen, open, close } = useDisclosure()

  useEffect(() => {
    toast.show('You have successfully seen the toast notification.', {
      timeout: 3000,
    })
  }, [])

  return (
    <MainWrapper>
      <ToastContainer />

      <Box boxClass='container mx-auto p-4'>
        <StackY>
          <Box>
            Webpack 5 boilerplate with React 17, Tailwind 2, using babel, sass,
            with a hot dev server and an optimized production build.
          </Box>
          <CheckboxGroupSection />

          <StackX gap={2}>
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

            <button
              className='px-3 py-1 bg-red-500 rounded-md hover:bg-red-400 text-white'
              onClick={() => {
                toast.show(
                  <>
                    <svg
                      className='w-5 h-5 text-blue-700'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                    <p className='ml-3 text-sm text-blue-700'>
                      <span className='font-medium'>Important Note!</span>{' '}
                      Change a few things up and try submitting again.
                    </p>
                  </>,
                  {
                    timeout: 50000,
                    variant: 'danger',
                  }
                )
              }}
            >
              Show toast
            </button>
          </StackX>

          <TableSection />
        </StackY>
      </Box>
      <Drawer open={isOpen} close={() => close()}>
        <div className='p-4'>
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.&quot;
        </div>
      </Drawer>
    </MainWrapper>
  )
}

export default App
