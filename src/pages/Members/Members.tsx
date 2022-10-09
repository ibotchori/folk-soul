import { LinkButton, MembersList, Title } from 'components'
import React from 'react'

type Props = {}

const Members = (props: Props) => {
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
          <LinkButton text='ახალი წევრი გყავს?' path={'/members/new'} />
        </div>
      </div>
    </>
  )
}

export default Members
