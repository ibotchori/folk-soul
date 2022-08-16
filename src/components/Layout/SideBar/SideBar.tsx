import React from 'react'

type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className='md:flex hidden h-screen items-center align-middle absolute '>
      <div className='bg-sidebarColor h-[31.25rem] rounded-tr-2xl rounded-br-2xl w-[18.75rem] border-b-[0.5px]  border-t-[0.5px] border-r-[0.5px] border-gray-400'>
        123
      </div>
    </div>
  )
}

export default SideBar
