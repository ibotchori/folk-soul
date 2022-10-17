import React from 'react'

type ButtonProps = {
  text: string
  backgroundColor: string
  height?: string
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor, height }) => {
  return (
    <button
      className={`px-8 h-12 ${backgroundColor} ${height} rounded-lg  font-[mtavruli] text-center text-sm md:text-lg pt-1 tracking-widest text-gray-200 hover:text-gray-100`}
    >
      {text}
    </button>
  )
}

export default Button
