import { CloseIcon } from 'assets'
import React from 'react'

type Props = {}

const Modal = (props: Props) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center'>
      <div className='flex justify-center items-center h-screen w-full '>
        {/* Content */}
        <div className='md:max-w-[30%] w-[70%] h-[50vh]  md:h-[60vh]   bg-[#FBFBFB] rounded-xl flex flex-col justify-between items-center relative '>
          {/* Modal close button */}
          <button className='w-full flex justify-end pr-4 top-0 pt-4 absolute'>
            <img className='md:w-7 w-4' src={CloseIcon} alt='' />
          </button>
          {/* Title */}
          <p className='font-[mtavruli] w-[85%] text-center text-xs md:text-lg pt-14 tracking-widest border-b-2 border-gray-400 '>
            შეცვალე ჯგუფის წევრის ავატარი
          </p>

          {/* Avatar Image */}
          <div className='relative pb-8'>
            <img
              className=' shadow-[15px_15px_15px_rgba(0,0,0,0.35)]  md:w-52 w-32  md:h-52 h-32  rounded-full border-2 border-gray-200 '
              src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
              alt='avatar'
            />
          </div>
          {/* Upload button */}
          <button className=' w-32 md:w-40 h-10 bg-[#143B52] rounded-lg mb-5 md:mb-20 '>
            <p className='font-[mtavruli] text-center text-sm md:text-lg pt-1 tracking-widest text-gray-200  '>
              ატვირთე
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
