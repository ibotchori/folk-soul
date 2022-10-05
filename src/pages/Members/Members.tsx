import React from 'react'
import MembersList from 'components/Members/MembersList'
import { useNavigate } from 'react-router-dom'
import Title from 'components/Title/Title'

type Props = {}

const Members = (props: Props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
        {/* Content */}
        <div className='w-[77%]  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-evenly items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
          {/* Title */}
          <Title className='pb-5 text-lg' text='ჯგუფის წევრები' />
          {/* Members */}
          <MembersList />
          {/* Add new member button */}
          <button
            onClick={() => navigate('/members/new')}
            className='font-[mtavruli] hover:text-[#55a5d3] text-[#3A7DA3] underline tracking-widest font-bold text-lg'
          >
            ახალი წევრი გყავს?
          </button>
        </div>
      </div>
    </>
  )
}

export default Members
