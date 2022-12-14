/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from 'components'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginInputTypes, LoginSchema } from 'Schema/LoginSchema'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { login, user } from 'features/auth/authSlice'

type Props = {}

const Login = (props: Props) => {
  const navigate = useNavigate()
  const globalUser = useAppSelector(user)

  const [usernameErrorFromAPI, setUsernameErrorFromAPI] = useState(false)
  const [passwordErrorFromAPI, setPasswordErrorFromAPI] = useState(false)

  const dispatch = useAppDispatch()
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard')
    }
  }, [globalUser, navigate])
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

  const onSubmit = async (data: LoginInputTypes) => {
    try {
      // HTTP request from redux
      const result: any = await dispatch(login(data))
      // save token if no error
      if (!result.error) {
        localStorage.setItem('token', JSON.stringify(result.payload))
        setUsernameErrorFromAPI(false)
        setPasswordErrorFromAPI(false)
        reset()
        navigate('/dashboard')
      }

      console.log(result)
    } catch (err: any) {
      // Handle Error Here
      console.log(err)
      setUsernameErrorFromAPI(false)
      setPasswordErrorFromAPI(false)
      if (err.message === 'Network Error') {
        alert('Something went wrong, try again later')
        reset()
      } else if (err.response.statusText === 'Unauthorized') {
        setPasswordErrorFromAPI(true)
      } else {
        setUsernameErrorFromAPI(true)
      }
    }
  }
  return (
    <>
      <div className='absolute text-gray-300 m-auto   pt-5 pl-5  '>
        <p>Username: daniel</p>
        <p>Password: 123123</p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='  items-center justify-center flex w-full h-full'
      >
        <div className='bg-gradient-to-t px-14 from-[#7b5a5a] to-[#345161]   border rounded-sm  border-gray-200 w-[21rem] sm:w-[25rem] h-[27rem] items-center flex justify-evenly flex-col'>
          <div className='bg-[#EB5757] w-40 h-12 text-center skew-x-[-40deg]'>
            <p className='skew-x-[40deg] font-[mtavruli] font-bold pt-3 pr-2 text-md'>
              ?????????????????????
            </p>
          </div>
          <Input
            name='username'
            id='username'
            placeholder='???????????????????????????'
            type='text'
            register={register}
            errorMessage={errors.username?.message}
          />
          <Input
            name='password'
            id='password'
            placeholder='??????????????????'
            type='password'
            register={register}
            errorMessage={errors.password?.message}
          />

          <button className='bg-[#10191d] border rounded-md text-gray-300 border-gray-300  w-60 h-14 text-center font-[mtavruli]  tracking-wider'>
            ?????????????????????????????????
          </button>
        </div>
      </form>
    </>
  )
}

export default Login
