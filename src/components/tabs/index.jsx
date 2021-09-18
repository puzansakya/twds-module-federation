import React from 'react'
import './index.css'
import PropTypes from 'prop-types'
const Context = React.createContext(null)

const initial = { active: 1 }

const reducers = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SWITCH':
      return { ...state, active: payload }
    default:
      return state
  }
}

const useTabs = () => React.useContext(Context)

/**
 * SOFTWARE DESING DOCUMENT
 * - USUAGE
  <Tabs>
    <Tabs.List className="flex justify-center border-b border-gray-200 p-1 gap-4">
      <Tabs.ListItem>Monthly Expenses</Tabs.ListItem>
      <Tabs.ListItem>Monthly Income</Tabs.ListItem>
    </Tabs.List>
    <Tabs.Panels>
      <Tabs.Panel>
        <p>Monthly Expenses</p>
      </Tabs.Panel>
      <Tabs.Panel>
        <p>Monthly income</p>
      </Tabs.Panel>
    </Tabs.Panels>
  </Tabs> 
 * 
 */
const Tabs = ({ defaultTab = null, children = [] }) => {
  const [state, dispatch] = React.useReducer(reducers, initial)
  React.useEffect(() => {
    if (defaultTab && defaultTab > 0 && defaultTab <= children.length) {
      dispatch({ type: 'SWITCH', payload: defaultTab })
    }
  }, [defaultTab, children.length])

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </div>
  )
}

const List = ({ children, className, ...props }) => {
  console.log(className)
  return (
    <ul className={`${className ? className : 'tab__list'}`} {...props}>
      {children.map((node, index) => ({
        ...node,
        props: { ...node.props, index: index + 1 },
      }))}
    </ul>
  )
}

const ListItem = ({ children, index }) => {
  const { state, dispatch } = useTabs()
  return (
    <li
      className={`${
        state.active === index ? 'list__item' : ''
      } list__item__default`}
      onClick={() => dispatch({ type: 'SWITCH', payload: index })}
    >
      {children}
    </li>
  )
}

const Panels = ({ children }) => {
  return (
    <div className='panels'>
      {children.map((node, index) => ({
        ...node,
        props: { ...node.props, index: index + 1 },
      }))}
    </div>
  )
}

const Panel = ({ children, index }) => {
  const { state } = useTabs()
  return (
    <section
      className={`${state.active === index ? 'panel-show' : 'panel-hide'}`}
    >
      {children}
    </section>
  )
}

Tabs.List = List
Tabs.ListItem = ListItem
Tabs.Panels = Panels
Tabs.Panel = Panel

Tabs.propTypes = {
  children: PropTypes.any,
  defaultTab: PropTypes.any,
}

List.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}

ListItem.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number,
}

Panels.propTypes = {
  children: PropTypes.any,
}

Panel.propTypes = {
  children: PropTypes.any,
  index: PropTypes.number,
}
export default Tabs
