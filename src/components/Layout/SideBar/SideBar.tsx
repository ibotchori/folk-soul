import {
  DoorIcon,
  HomeIcon,
  MemberIcon,
  MusicalKeyIcon,
  YoutubeIcon,
} from 'assets'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className='md:flex hidden h-screen items-center align-middle absolute '>
      <div className='bg-sidebarColor h-[31.25rem] rounded-tr-2xl rounded-br-2xl w-[18.75rem] border-b-[0.5px]  border-t-[0.5px] border-r-[0.5px] border-gray-400 text-gray-200 font-[mtavruli] flex flex-col items-start justify-evenly  py-4 text-lg tracking-wide '>
        <Link
          to={''}
          className='flex items-center w-full h-[3rem] pl-6 pt-[0.4rem] hover:bg-white hover:text-black    '
        >
          <div className='w-11 flex justify-center'>
            <img className='pb-2 pr-5 ' src={HomeIcon} alt='Home' />
          </div>

          <p> მთავარი</p>
        </Link>
        <Link
          to={''}
          className='flex items-center w-full h-[3rem] pl-6 pt-[0.4rem]  hover:bg-white hover:text-black bg-white text-black'
        >
          <div className='w-11 flex justify-center'>
            <img className='pb-2 pr-5' src={MemberIcon} alt='Home' />
          </div>

          <p> ჯფუფის წევრები</p>
        </Link>
        <Link
          to={''}
          className='flex items-center w-full h-[3rem] pl-6 pt-[0.4rem] hover:bg-white hover:text-black '
        >
          <div className='w-11 flex justify-center'>
            <img className='pb-2 pr-5' src={YoutubeIcon} alt='Home' />
          </div>

          <p> სოციალური ბმულები</p>
        </Link>
        <Link
          to={''}
          className='flex items-center w-full h-[3rem] pl-6 pt-[0.4rem] hover:bg-white hover:text-black '
        >
          <div className='w-11 flex justify-center  '>
            {' '}
            <img className='pb-2 pr-5' src={MusicalKeyIcon} alt='Home' />
          </div>

          <p> ბენდის შესახებ</p>
        </Link>
        <Link
          to={''}
          className='flex items-center w-full h-[3rem] pl-6 pt-[0.4rem] hover:bg-white hover:text-black '
        >
          <div className='w-11 flex justify-center'>
            <img className='pb-2 pr-5' src={DoorIcon} alt='Home' />
          </div>

          <p> გადი გარეთ</p>
        </Link>
      </div>
    </div>
  )
}

export default SideBar
