/* eslint-disable @typescript-eslint/no-unused-vars */
import { DeleteIcon, EditPhotoIcon, ModifyIcon, SeeIcon } from 'assets'
import { members } from './data'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import ReactPaginate from 'react-paginate'
import './Pagination.css'
import useWindowDimensions from 'hooks/useWindowDimensions'
import Modal from 'components/Modal/Modal'
type Props = {}

const MembersList = (props: Props) => {
  /* Modal Functionality */
  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => {
    setShowModal(false)
  }
  /* END Modal Functionality */

  // Imported  Hook
  const { height, width } = useWindowDimensions()

  const [pageNumber, setPageNumber] = useState(0)
  const membersPerPage = width > 1500 ? 3 : width > 1050 ? 2 : 1

  const pageVisited = pageNumber * membersPerPage

  const displayMembers = members
    .slice(pageVisited, pageVisited + membersPerPage)
    .map((member) => {
      return (
        <div className='bg-sidebarColor sm:w-[13.5rem] w-[10.5rem] sm:h-[17.375rem] h-[14.375rem] rounded-md shadow-[15px_15px_15px_rgba(0,0,0,0.35)] border-2 border-black text-gray-200 flex flex-col justify-between pt-8 items-center'>
          <div className='relative'>
            {/* Avatar Image */}
            <img
              className='sm:w-36 w-32  sm:h-36 h-32  rounded-full border-2 border-gray-200 '
              src='https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
              alt='avatar'
            />

            {/* Avatar Edit Button */}
            <img
              onClick={() => setShowModal(true)}
              className='absolute bottom-0 right-0 cursor-pointer pr-3'
              src={EditPhotoIcon}
              alt='Edit'
            />
          </div>

          <p className='font-[mtavruli]'>{member.title}</p>
          <div className=' w-full text-center h-10 border-t-2 border-black'>
            <div className='flex justify-between px-5 pt-2 items-center'>
              <button>
                <img src={SeeIcon} alt='See Icon' />
              </button>
              <button>
                <img src={ModifyIcon} alt='Modify Icon' />
              </button>
              <button>
                <img src={DeleteIcon} alt='Delete Icon' />
              </button>
            </div>
          </div>
        </div>
      )
    })

  const pageCount = Math.ceil(members.length / membersPerPage)
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected)
  }
  return (
    <>
      <div className='flex justify-center lg:justify-between w-[70%]'>
        {displayMembers}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'paginationButtons'}
        activeClassName={'paginationActive'}
        previousLinkClassName={'prevButton'}
        nextLinkClassName={'nextButton'}
      />
      <Modal onClose={handleOnClose} visible={showModal} />
    </>
  )
}

export default MembersList
