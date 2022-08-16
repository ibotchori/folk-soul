import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navButtonsData } from './navButtonsData'

type Props = {}
const NavItemsList = (props: Props) => {
  const location = useLocation()
  return (
    <>
      {navButtonsData.map((navItem: any) => {
        return (
          <Link
            to={navItem.path}
            className={`flex items-center w-full h-[3rem] pl-6 pt-[0.4rem] hover:bg-white hover:text-black  ${
              location.pathname === navItem.path ? 'bg-white text-black' : ''
            }  `}
          >
            <div className='w-11 flex justify-center'>
              <img className='pb-2 pr-5 ' src={navItem.icon} alt='Home' />
            </div>

            <p> {navItem.label}</p>
          </Link>
        )
      })}
    </>
  )
}

export default NavItemsList
