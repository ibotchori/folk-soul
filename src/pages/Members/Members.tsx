import React from 'react'

type Props = {}

const Members = (props: Props) => {
  return (
    <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
      {/* Content */}
      <div className='w-4/6  sm:h-[60vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-evenly items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
        {/* Title */}
        <p className='font-[mtavruli] text-xl  tracking-widest  w-[80%] text-center border-b-2 border-gray-600 pb-5'>
          ჯგუფის წევრები
        </p>
        {/* Members */}
        <div className='flex justify-between w-[70%]'>
          <div className='bg-sidebarColor w-[13.5rem] h-[17.375rem] rounded-md shadow-[15px_15px_15px_rgba(0,0,0,0.35)] border-2 border-black text-white flex flex-col justify-between items-center'>
            <div>Image</div>
            <div>Title</div>
            <div className=' w-full text-center h-10 border-t-2 border-black'>
              Button
            </div>
          </div>
          <div className='bg-sidebarColor w-[13.5rem] h-[17.375rem] rounded-md shadow-[15px_15px_15px_rgba(0,0,0,0.35)] border-2 border-black text-white flex flex-col justify-between items-center'>
            <div>Image</div>
            <div>Title</div>
            <div className=' w-full text-center h-10 border-t-2 border-black'>
              Button
            </div>
          </div>
          <div className='bg-sidebarColor w-[13.5rem] h-[17.375rem] rounded-md shadow-[15px_15px_15px_rgba(0,0,0,0.35)] border-2 border-black text-white flex flex-col justify-between items-center'>
            <div>Image</div>
            <div>Title</div>
            <div className=' w-full text-center h-10 border-t-2 border-black'>
              Button
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members
