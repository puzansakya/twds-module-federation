import PropTypes from 'prop-types'
import { forwardRef, useEffect, useMemo, useRef } from 'react'
import { useRowSelect, useSortBy, useTable } from 'react-table'
import HeroIcon from '../heroicon/index.jsx'

const IndeterminateCheckbox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef()
  const resolvedRef = ref || defaultRef

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate
  }, [resolvedRef, indeterminate])

  return (
    <>
      <input type='checkbox' ref={resolvedRef} {...rest} />
    </>
  )
})

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox'

const CheckboxHeader = ({ getToggleAllRowsSelectedProps }) => (
  <div>
    <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
  </div>
)

const Cell = ({ row }) => (
  <div>
    <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
  </div>
)

const Table = ({ colData, tableData }) => {
  const data = useMemo(() => tableData, [tableData])
  const columns = useMemo(() => colData, [colData])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // selectedFlatRows,
    state: { selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: <CheckboxHeader />,
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: <Cell />,
        },
        ...columns,
      ])
    }
  )

  return (
    <div className='flex flex-col space-y-2 text-gray-900'>
      <div className='bg-white rounded-md overflow-hidden'>
        <div className='max-w-screen-xl overflow-x-auto'>
          <table
            {...getTableProps()}
            className='min-w-full divide-y divide-gray-200'
          >
            <thead className='bg-gray-50'>
              {headerGroups.map((headerGroup) => (
                <tr key='table-tr' {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      key='table-th'
                      scope='col'
                      className='px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider'
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className='flex space-x-2 items-center select-none '>
                        <span>{column.render('Header')}</span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <HeroIcon name='chevronDown' />
                          ) : (
                            <HeroIcon name='chevronUp' />
                          )
                        ) : (
                          ''
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              {...getTableBodyProps()}
              className='bg-white divide-y divide-gray-200'
            >
              {rows.map((row) => {
                prepareRow(row)
                return (
                  <tr
                    key='table-body-tr'
                    {...row.getRowProps()}
                    className={`${
                      row.original.isopened ? 'bg-yellow-100' : 'bg-white'
                    }`}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          key='table-body-td'
                          className='px-6 py-4 whitespace-nowrap'
                          {...cell.getCellProps()}
                        >
                          {cell.render('Cell')}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <p className='text-white'>
        Selected Rows: {Object.keys(selectedRowIds).length}
      </p>
    </div>
  )
}

IndeterminateCheckbox.propTypes = {
  indeterminate: PropTypes.any,
}

Table.propTypes = {
  colData: PropTypes.any,
  tableData: PropTypes.any,
}
Cell.propTypes = {
  row: PropTypes.shape({
    getToggleRowSelectedProps: PropTypes.any,
  }),
}

CheckboxHeader.propTypes = {
  getToggleAllRowsSelectedProps: PropTypes.any,
}
export default Table
