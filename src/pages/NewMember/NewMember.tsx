import Button from 'components/Button/Button'
import GoBackButton from 'components/Button/GoBackButton'
import React from 'react'

type Props = {}

const NewMember = (props: Props) => {
  return (
    <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
      {/* Content */}
      <div className='w-[77%]  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-evenly items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
        {/* Title */}
        <p className='font-[mtavruli] text-lg  tracking-widest  w-[80%] text-center border-b-2 border-gray-600 pb-5 '>
          დაამატე ჯგუფის ახელი წევრი
        </p>
        {/* Members */}

        {/* Add new member button */}
        <Button text='დაამატე წევრი' backgroundColor='primaryBG' />
        <GoBackButton />
      </div>
    </div>
  )
}

export default NewMember
