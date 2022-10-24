import { CloseIcon } from 'assets'
import React, { MouseEventHandler } from 'react'

type MembersModalProps = {
  visible: boolean
  onClose: MouseEventHandler<HTMLButtonElement>
  title: string
  subTitle?: string
  image?: any
  className?: string
}

const MembersModal: React.FC<MembersModalProps> = ({
  title,
  subTitle,
  className,
  image,
  visible,
  onClose,
}) => {
  if (!visible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center'>
      <div className='flex justify-center items-center h-screen w-full '>
        {/* Content */}
        <div className='md:max-w-[30%] w-[70%] h-[50vh]  md:h-[60vh] pb-10 md:pb-20 bg-[#FBFBFB] rounded-xl flex flex-col justify-between items-center relative '>
          {/* Modal close button */}
          <button
            onClick={onClose}
            className='w-full flex justify-end pr-4 top-0 pt-4 absolute'
          >
            <img
              className='md:w-7 w-4 hover:bg-gray-300  rounded-full'
              src={CloseIcon}
              alt='Close Icon'
            />
          </button>
          {/* Title */}
          <p className='font-[mtavruli] w-[85%] text-center text-xs md:text-lg pt-14 tracking-widest border-b-2 border-gray-400 '>
            {title}
          </p>
          {/* Sub Title */}
          <p className=''>{subTitle}</p>

          {/* Avatar Image */}
          <div className='relative pb-8'>
            <img
              className={`shadow-[15px_15px_15px_rgba(0,0,0,0.35)]  md:w-52 w-32  md:h-52 h-32  border-2 border-gray-200 ${className}`}
              src={image}
              alt='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembersModal
