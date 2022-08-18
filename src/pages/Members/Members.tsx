import { EditPhotoIcon } from 'assets'
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
          <div className='bg-sidebarColor w-[13.5rem] h-[17.375rem] rounded-md shadow-[15px_15px_15px_rgba(0,0,0,0.35)] border-2 border-black text-gray-200 flex flex-col justify-between pt-8 items-center'>
            <div className='relative w-36 h-36  '>
              {/* Avatar Image */}
              <img
                className='w-36 h-36 rounded-full border-2 border-gray-200 '
                src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
                alt='avatar'
              />

              {/* Avatar Edit Button */}
              <img
                className='absolute bottom-0 right-0 cursor-pointer pr-3'
                src={EditPhotoIcon}
                alt='Edit'
              />
            </div>

            <p className='font-[mtavruli]'>საბა</p>
            <div className=' w-full text-center h-10 border-t-2 border-black'>
              Button
            </div>
          </div>
          <div className='bg-sidebarColor w-[13.5rem] h-[17.375rem] rounded-md shadow-[15px_15px_15px_rgba(0,0,0,0.35)] border-2 border-black text-gray-200 flex flex-col justify-between pt-8 items-center'>
            <div className='relative w-36 h-36  '>
              {/* Avatar Image */}
              <img
                className='w-36 h-36 rounded-full border-2 border-gray-200 '
                src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
                alt='avatar'
              />

              {/* Avatar Edit Button */}
              <img
                className='absolute bottom-0 right-0 cursor-pointer pr-3'
                src={EditPhotoIcon}
                alt='Edit'
              />
            </div>

            <p className='font-[mtavruli]'>ვანო</p>
            <div className=' w-full text-center h-10 border-t-2 border-black'>
              Button
            </div>
          </div>
          <div className='bg-sidebarColor w-[13.5rem] h-[17.375rem] rounded-md shadow-[15px_15px_15px_rgba(0,0,0,0.35)] border-2 border-black text-gray-200 flex flex-col justify-between pt-8 items-center'>
            <div className='relative w-36 h-36  '>
              {/* Avatar Image */}
              <img
                className='w-36 h-36 rounded-full border-2 border-gray-200 '
                src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
                alt='avatar'
              />

              {/* Avatar Edit Button */}
              <img
                className='absolute bottom-0 right-0 cursor-pointer pr-3'
                src={EditPhotoIcon}
                alt='Edit'
              />
            </div>

            <p className='font-[mtavruli]'>ნიკა</p>
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
