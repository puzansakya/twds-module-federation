import CheckboxGroup from '../components/checkboxgroup/index.jsx'

const CheckboxGroupSection = () => {
  const items = [
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
  ]

  const selected = [
    {
      label: 'mango',
      value: 1,
    },
  ]

  const onCheckboxChange = (items) => {
    alert(JSON.stringify(items, null, 2))
  }
  return (
    <CheckboxGroup
      items={items}
      selected={selected}
      onCheckboxChange={onCheckboxChange}
      track='value'
    />
  )
}
export default CheckboxGroupSection
