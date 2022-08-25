import React from 'react'
import MembersList from 'components/Memers/MembersList'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Members = (props: Props) => {
  const navigate = useNavigate()
  return (
    <>
      <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
        {/* Content */}
        <div className='w-[77%]  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-evenly items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
          {/* Title */}
          <p className='font-[mtavruli] text-lg  tracking-widest  w-[80%] text-center border-b-2 border-gray-600 pb-5 '>
            ჯგუფის წევრები
          </p>
          {/* Members */}
          <MembersList />
          {/* Add new member button */}
          <button>
            {' '}
            <p
              onClick={() => navigate('/members/new')}
              className='font-[mtavruli] text-[#3A7DA3] underline tracking-widest font-bold text-lg'
            >
              ახალი წევრი გყავს?
            </p>
          </button>
        </div>
      </div>
    </>
  )
}

export default Members
