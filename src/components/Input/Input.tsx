import React from 'react'

type InputProps = {
  id: string
  type: string
  placeholder: string
}

const Input: React.FC<InputProps> = ({ id, type, placeholder }) => {
  return (
    <input
      type={type}
      id={id}
      className='h-14 bg-gray-50 text-gray-900 text-sm rounded-lg border-gray-400 focus:outline-none focus:border-gray-500  focus:ring-gray-500  block w-full p-4 border-2 placeholder:text-center text-center'
      placeholder={placeholder}
      required
    />
  )
}

export default Input
