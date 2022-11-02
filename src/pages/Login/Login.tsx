/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from 'components'
import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginInputTypes, LoginSchema } from 'Schema/LoginSchema'

type Props = {}

const Login = (props: Props) => {
  // useForm
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<LoginInputTypes>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(LoginSchema),
  })
  return (
    <div className='  items-center justify-center flex w-full h-full'>
      <div className='bg-gradient-to-t px-14 from-[#7b5a5a] to-[#345161]   border rounded-sm  border-gray-200 w-[21rem] sm:w-[25rem] h-[27rem] items-center flex justify-evenly flex-col'>
        <div className='bg-[#EB5757] w-40 h-12 text-center skew-x-[-40deg]'>
          <p className='skew-x-[40deg] font-[mtavruli] font-bold pt-3 pr-2 text-md'>
            კარიბჭე
          </p>
        </div>
        <Input
          name='username'
          id='username'
          placeholder='მეტსახელი'
          type='text'
          register={register}
        />
        <Input
          name='password'
          id='password'
          placeholder='პაროლი'
          type='password'
          register={register}
        />

        <Link
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
