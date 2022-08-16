import { TVicon } from 'assets'
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
      {/* Content */}
      <div className='w-4/6  sm:h-[60vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-evenly items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
        <p className='font-[mtavruli] text-xl pt-5   md:text-3xl lg:text-5xl tracking-widest '>
          დილამშვიდობისა!
        </p>
        <img className='w-[500px]' src={TVicon} alt='TV_image' />
      </div>
    </div>
  )
}

export default Dashboard
