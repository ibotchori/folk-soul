import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import SideBar from './SideBar/SideBar'

type Props = {}

const Layout = (props: Props) => {
  const location = useLocation()

  return (
    <div className='bg-gradient-to-r from-[#342C46] via-[#534571] to-[#342C46]  h-screen w-full flex'>
      {location.pathname === '/' || location.pathname === '/login' ? (
        <></>
      ) : (
        <SideBar />
      )}

      <Outlet />
    </div>
  )
}

export default Layout
