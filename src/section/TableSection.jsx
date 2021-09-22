import PropTypes from 'prop-types'

// components
import Table from '../components/table/index.jsx'
import HeroIcon from '../components/heroicon/index.jsx'
import Avatar from '../components/avatar/index.jsx'

const StatusSign = ({ bg = 'bg-blue-500' }) => {
  return <div className={`w-4 h-4 rounded-full ${bg}`}></div>
}

StatusSign.propTypes = {
  bg: PropTypes.string,
}

const TableSection = () => {
  const persons = [
    {
      id: 1,
      isopened: false,
      employee: 'Anna Cruickshank',
      registeredDate: 'March 18, 2020',
      registeredDay: 'Sunday',
      ranking: '4.0',
      status: 'On project',
      statusColor: 'bg-blue-500',
      statusTextColor: 'text-blue-500',
      transaction: 'ARB-2560',
      division: 'Marketing',
      location: 'New York, NY',
      progress: '100%',
      score: '32,127',
      email: 'jane.cooper@example.com',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 2,
      isopened: true,
      employee: 'Providenci Alten',
      email: 'Alten@address.com',
      registeredDate: 'February 14, 2020',
      registeredDay: 'Friday',
      ranking: '3.5',
      status: 'Available',
      statusColor: 'bg-green-500',
      statusTextColor: 'text-green-500',
      transaction: 'ARB-8947',
      division: 'Sales',
      location: 'Chicago, IL',
      progress: '98%',
      score: '15,384',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 3,
      isopened: false,
      employee: 'Fred Oberbrunner',
      email: 'Oberbrunner@mail.com',
      registeredDate: 'May 20, 2002',
      registeredDay: 'Tuesday',
      ranking: '5.0',
      status: 'Available',
      statusColor: 'bg-green-500',
      statusTextColor: 'text-green-500',
      transaction: 'xyz-0024',
      division: 'Design',
      location: 'New York, NY',
      progress: '91%',
      score: '10,862',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 4,
      isopened: false,
      employee: 'Harrison P.',
      email: 'harry@address.com',
      registeredDate: 'April 32, 2056',
      registeredDay: 'Tuesday',
      ranking: '5.0',
      status: 'No project',
      statusColor: 'bg-green-500',
      statusTextColor: 'text-yellow-500',
      transaction: 'xyz-0048',
      division: 'Shit Management',
      location: 'Mytischi, MO',
      progress: '89%',
      score: '8,904',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 5,
      isopened: false,
      employee: 'Andrej Ostopenka',
      email: 'a_ostap@sexproduct.com',
      registeredDate: 'December 4, 2020',
      registeredDay: 'Tuesday',
      ranking: '3.5',
      status: 'No project',
      statusColor: 'bg-green-500',
      statusTextColor: 'text-yellow-500',
      transaction: 'BITKA-550',
      division: 'Development',
      location: 'Boston, MA',
      progress: '97%',
      score: '3,561',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      id: 6,
      isopened: false,
      employee: 'Rose Satter',
      email: 'satter@address.com',
      registeredDate: 'October 11, 2017',
      registeredDay: 'Tuesday',
      ranking: '5.0',
      status: 'On project',
      statusColor: 'bg-blue-500',
      statusTextColor: 'text-yellow-500',
      transaction: 'ARB-0110',
      division: 'Techical Support',
      location: 'Arbat, MO',
      progress: '98%',
      score: '96',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ]

  const colData = [
    {
      Header: 'Employee',
      accessor: 'employee',
      Cell: function employeeCell(tableInfo) {
        return (
          <div className='flex items-center'>
            <Avatar
              name={`${tableInfo.data[tableInfo.row.index].employee}`}
              imgsrc={`${tableInfo.data[tableInfo.row.index].image}`}
            />

            <div className='ml-4'>
              <div className='text-sm font-medium text-gray-900'>
                {`${tableInfo.data[tableInfo.row.index].employee}`}
              </div>
              <div className='text-sm text-gray-500'>{`${
                tableInfo.data[tableInfo.row.index].email
              }`}</div>
            </div>
          </div>
        )
      },
    },
    {
      Header: 'Registered',
      accessor: 'registeredDay',
      Cell: function registerCell(tableInfo) {
        return (
          <>
            <div className='text-sm font-medium text-gray-900'>
              {tableInfo.data[tableInfo.row.index].registeredDate}
            </div>
            <div className='text-sm text-gray-500 text-gray-900'>
              {tableInfo.data[tableInfo.row.index].registeredDay}
            </div>
          </>
        )
      },
    },
    {
      Header: 'Ranking',
      accessor: 'ranking',
      Cell: function rankCell(tableInfo) {
        return (
          <div className='flex items-center'>
            <div className='text-sm text-gray-900'>
              {tableInfo.data[tableInfo.row.index].ranking}
            </div>
            <div className='flex'>
              <HeroIcon name='star' />
              <HeroIcon name='star' />
              <HeroIcon name='star' />
              <HeroIcon name='star' />
            </div>
          </div>
        )
      },
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: function statusCell(tableInfo) {
        return (
          <div className='flex items-center space-x-4 text-gray-900'>
            <StatusSign bg={tableInfo.data[tableInfo.row.index].statusColor} />
            <p
              className={`${
                tableInfo.data[tableInfo.row.index].statusTextColor
              } font-semibold`}
            >
              {tableInfo.data[tableInfo.row.index].status}
            </p>
          </div>
        )
      },
    },
    {
      Header: 'Transaction',
      accessor: 'transaction',
      Cell: function transactionCell(tableInfo) {
        return (
          <div className='flex items-center space-x-4 uppercase text-gray-900'>
            <p>{tableInfo.data[tableInfo.row.index].transaction}</p>
          </div>
        )
      },
    },
    {
      Header: 'Division',
      accessor: 'division',
    },
    {
      Header: 'Location',
      accessor: 'location',
    },
    {
      Header: 'Progress',
      accessor: 'progress',
    },
    {
      Header: 'Score',
      accessor: 'score',
    },
    {
      id: 'edit',
      accessor: '[row identifier to be passed to button]',
      Cell: function editCell() {
        return (
          <button
            className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'
            onClick={() => {
              console.log('edit clicked')
            }}
          >
            Edit
          </button>
        )
      },
    },
  ]

  return <Table colData={colData} tableData={persons} />
}

export default TableSection
