import { Button, LinkButton, Title } from 'components'
import React from 'react'

type Props = {}

const BandInfoEdit = (props: Props) => {
  return (
    <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
      {/* Content */}
      <div className='w-[77%]  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-between items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
        {/* Title */}
        <div className=' w-[80%] '>
          <Title
            className='pt-20 text-lg pb- !w-full'
            text='ბენდის შესახებ - დაარედაქტირე'
          />
        </div>

        <div className=' w-[80%] mb-8 mt-5 h-[460px] bg-[#E5E5E5] rounded-lg shadow-[5px_5px_15px_5px_rgba(0,0,0,0.35)]'></div>

        <div className=' flex flex-col items-center justify-center pb-5'>
          <Button text='შეინახე' className='bg-[#53C02C] h-10 mb-4 px-12' />
          <LinkButton text='გადი უკან' path={'/band-info'} />
        </div>
      </div>
    </div>
  )
}

export default BandInfoEdit
