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
