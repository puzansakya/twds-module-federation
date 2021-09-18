import { useEffect, useState } from 'react'

/**
 * USUAGE
 *   <CheckboxGroup
      items={[
        {
          label: 'mango',
          value: 1,
        },
        {
          label: 'apple',
          value: 2,
        },
        {
          label: 'banana',
          value: 3,
        },
      ]}
      selected={[
        {
          label: 'mango',
          value: 1,
        },
      ]}
      onCheckboxChange={onCheckboxChange}
      track='value'
    />
 * @param {*} param0 
 * @returns 
 */

const CheckboxGroup = ({ items, selected, onCheckboxChange, track }) => {
  const [checked, setChecked] = useState({})
  useEffect(() => {
    if (selected) {
      let defaultChecked = selected.reduce((acc, curr) => {
        return {
          ...acc,
          [curr[track]]: true,
        }
      }, {})
      setChecked(defaultChecked)
    }
  }, [selected, track])

  const handleCheckboxChange = (e, item) => {
    let toUpdate = { ...checked, [item[track]]: e.target.checked }

    const activeChecked = Object.keys(toUpdate).filter(
      (track) => toUpdate[track]
    )

    const filteredItems = items.filter((itemToFilter) =>
      activeChecked.some(
        (activeFilterName) => parseInt(activeFilterName) === itemToFilter[track]
      )
    )

    onCheckboxChange(filteredItems)

    setChecked({ ...toUpdate })
  }
  return (
    items &&
    items.map((item) => (
      <div key={`checkbox-group-item-${item[track]}`} className='mt-2'>
        <input
          checked={checked[item[track]] ? true : false}
          onChange={(e) => handleCheckboxChange(e, item)}
          type='checkbox'
          name=''
          id={item[track]}
        />
        <label className='ml-2 leading-5' htmlFor={item[track]}>
          {item.label}
        </label>
      </div>
    ))
  )
}
export default CheckboxGroup
