import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  const location = useLocation()

  return (
    <div className='bg-gradient-to-r from-[#342C46] via-[#534571] to-[#342C46]  h-screen w-full flex'>
      {location.pathname === '/' || location.pathname === '/login' ? (
        <></>
      ) : (
        /* Sidebar */
        <div className='md:flex hidden h-screen items-center align-middle absolute '>
          <div className='bg-sidebarColor h-[31.25rem] rounded-tr-2xl rounded-br-2xl w-[18.75rem] border-b-[0.5px]  border-t-[0.5px] border-r-[0.5px] border-gray-400'>
            123
          </div>
        </div>
      )}

      <Outlet />
    </div>
  )
}

export default Layout
