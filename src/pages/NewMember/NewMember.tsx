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
        {/* Form */}
        <div className='flex flex-col gap-3 sm:gap-12 items-center'>
          <div className='w-[50%]'>
            <input
              type='text'
              id='name'
              className='bg-gray-50 text-gray-900 text-sm rounded-lg border-gray-400 focus:outline-none focus:border-gray-500  focus:ring-gray-500  block w-full p-4 border-2 placeholder:text-center text-center'
              placeholder='სახელი'
              required
            />
          </div>
          <div className='flex gap-3 sm:gap-10 w-[80%]'>
            <input
              type='text'
              id='instrument'
              className='bg-gray-50 text-gray-900 text-sm rounded-lg border-gray-400 focus:outline-none focus:border-gray-500  focus:ring-gray-500  block w-full p-4 border-2 placeholder:text-center text-center'
              placeholder='ინსტრუმენტი'
              required
            />
            <input
              type='number'
              id='orbit'
              className='bg-gray-50 text-gray-900 text-sm rounded-lg border-gray-400 focus:outline-none focus:border-gray-500  focus:ring-gray-500  block w-full p-4 border-2 placeholder:text-center text-center'
              placeholder='ორბიტის სიგანე'
              required
            />
            <input
              type='text'
              id='color'
              className='bg-gray-50 text-gray-900 text-sm rounded-lg border-gray-400 focus:outline-none focus:border-gray-500   focus:ring-gray-500  block w-full p-4 border-2 placeholder:text-center text-center'
              placeholder='ფერი'
              required
            />
          </div>
          <div className='w-[95%]'>
            <textarea
              rows={6}
              id='info'
              className='  bg-gray-50 text-gray-900 text-sm rounded-lg border-gray-400 focus:outline-none focus:border-gray-500  focus:ring-gray-500  block w-full p-4 border-2 '
              placeholder='ბიოგრაფია'
              required
            ></textarea>
          </div>
        </div>

        {/* Add new member button */}
        <div className='flex flex-col'>
          <Button text='დაამატე წევრი' backgroundColor='primaryBG' />
          <GoBackButton />
        </div>
      </div>
    </div>
  )
}

export default NewMember
