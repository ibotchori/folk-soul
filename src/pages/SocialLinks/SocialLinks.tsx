import { ModifyIcon, SeeIcon } from 'assets'
import React from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {}

const SocialLinks = (props: Props) => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
      {/* Content */}
      <div className='w-[77%]  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-evenly items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
        {/* Title */}
        <p className='font-[mtavruli] text-lg  tracking-widest  w-[80%] text-center border-b-2 border-gray-600 pb-5 '>
          სოციალური ბმულები
        </p>
        {/* Social Links */}
        <div className='flex h-16 bg-sidebarColor w-[70%] rounded-md shadow-[7px_7px_7px_rgba(0,0,0,0.35)] '>
          <img src='' alt='' />
          <p className='text-white'>YouTube</p>
          <p>https://www.youtube.com/</p>
          <div className='flex justify-between px-5 pt-2 items-center'>
            <button>
              <img src={SeeIcon} alt='See Icon' />
            </button>
            <button>
              <img src={ModifyIcon} alt='Modify Icon' />
            </button>
          </div>
        </div>

        {/* Add new Social Link button */}
        <button
          onClick={() => navigate('/social-links/new')}
          className='font-[mtavruli] hover:text-[#55a5d3] text-[#3A7DA3] underline tracking-widest font-bold text-lg'
        >
          დაამატე ახალი სოციალური ბმული
        </button>
      </div>
    </div>
  )
}

export default SocialLinks
