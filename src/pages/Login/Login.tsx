import { useAppDispatch, useAppSelector } from 'app/hooks'
import { Input } from 'components'
import { user, login } from 'features/auth/authSlice'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
  const globalUser = useAppSelector(user)
  console.log('🚀 ~ Login ~ user', globalUser)
  const dispatch = useAppDispatch()
  return (
    <div className='  items-center justify-center flex w-full h-full'>
      <div className='bg-gradient-to-t px-14 from-[#7b5a5a] to-[#345161]   border rounded-sm  border-gray-200 w-[21rem] sm:w-[25rem] h-[27rem] items-center flex justify-evenly flex-col'>
        <div className='bg-[#EB5757] w-40 h-12 text-center skew-x-[-40deg]'>
          <p className='skew-x-[40deg] font-[mtavruli] font-bold pt-3 pr-2 text-md'>
            კარიბჭე
          </p>
        </div>
        <Input id='username' placeholder='მეტსახელი' type='text' />
        <Input id='password' placeholder='პაროლი' type='password' />

        <Link
          onClick={() => dispatch(login())}
          to={'/dashboard'}
          className='bg-[#10191d] border pt-4 rounded-md text-gray-300 border-gray-300  w-60 h-14 text-center font-[mtavruli]  tracking-wider'
        >
          შემობრძანდი
        </Link>
      </div>
    </div>
  )
}

export default Login
