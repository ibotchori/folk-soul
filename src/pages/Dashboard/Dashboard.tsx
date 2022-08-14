import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='flex justify-between'>
      <div className='w-24 h-56 bg-orange-600'>Side bar</div>
      {/* Content */}
      <div className='w-3/4 h-[70vh] bg-white rounded-md flex flex-col justify-between'>
        <p>დილამშვიდობისა</p>
        <p>დილამშვიდობისა</p>
      </div>
    </div>
  )
}

export default Dashboard
