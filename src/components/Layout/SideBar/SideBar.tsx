import React from 'react'
import NavButtonList from './NavButtons/NavButtonList'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className='md:flex hidden h-screen items-center align-middle absolute '>
      <div className='bg-sidebarColor h-[31.25rem] rounded-tr-2xl rounded-br-2xl w-[18.75rem] border-b-[0.5px]  border-t-[0.5px] border-r-[0.5px] border-gray-400 text-gray-200 font-[mtavruli] flex flex-col items-start justify-evenly  py-4 text-lg tracking-wide '>
        <NavButtonList />
      </div>
    </div>
  )
}

export default SideBar
