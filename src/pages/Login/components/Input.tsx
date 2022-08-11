import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  type?: string
  id?: string
  placeholder?: string
}

const Input: React.FC<Props> = ({ type, id, placeholder }) => {
  return (
    <input
      id={id}
      type={type}
      className={`bg-[#C3B6B2] text-gray-900 text-sm rounded-md border-gray-300 focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500  block  p-4 border w-[300px] placeholder-gray-700 placeholder:text-[16px]`}
      placeholder={placeholder}
    />
  )
}

export default Input
