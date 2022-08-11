import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className='  items-center justify-center flex h-full'>
      <div className='bg-gradient-to-t  from-[#7b5a5a] to-[#345161]   border rounded-sm  border-gray-200 w-[380px] h-[430px] items-center flex justify-evenly flex-col'>
        <div className='bg-[#EB5757] w-40 h-12 text-center skew-x-[-40deg]'>
          <p className='skew-x-[40deg] font-[mtavruli] font-bold pt-3 pr-2 text-md'>
            კარიბჭე
          </p>
        </div>
        <input
          type='text'
          className={`bg-[#C3B6B2] text-gray-900 text-sm rounded-md border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500  block  p-4 border w-[300px] placeholder-gray-700 placeholder:text-[16px]`}
          placeholder='მეტსახელი'
        />
        <input
          type='password'
          className={`bg-[#C3B6B2] text-gray-900 text-sm rounded-md border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500  block  p-4 border w-[300px] placeholder-gray-700 placeholder:text-[16px]`}
          placeholder='პაროლი'
        />

        <button className='bg-[#345161] border rounded-md text-gray-300 border-gray-300  w-60 h-14 text-center font-[mtavruli] pt-1 tracking-wider'>
          შემობრძანდი
        </button>
      </div>
    </div>
  )
}

export default Login
