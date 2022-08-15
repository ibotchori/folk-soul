import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='flex justify-end items-center h-screen md:mr-32 mr-16'>
      {/* Content */}
      <div className='w-4/6 h-[80vh] bg-white rounded-md flex flex-col justify-evenly  items-center'>
        <p className='font-[mtavruli]  text-2xl lg:text-5xl tracking-widest '>
          დილამშვიდობისა!
        </p>
        <img
          className=''
          src='https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg'
          alt=''
        />
      </div>
    </div>
  )
}

export default Dashboard
