import React from 'react'

type ButtonProps = {
  text: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`px-8 h-12 ${className}  rounded-lg  font-[mtavruli] text-center text-sm md:text-lg pt-1 tracking-widest text-gray-200 hover:text-gray-100`}
    >
      {text}
    </button>
  )
}

export default Button
