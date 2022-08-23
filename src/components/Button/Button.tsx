import React from 'react'

type ButtonProps = {
  text: string
  backgroundColor: string
}

const Button: React.FC<ButtonProps> = ({ text, backgroundColor }) => {
  return (
    <button
      className={`px-8 h-10 bg-${backgroundColor} rounded-lg mb-10 md:mb-20 font-[mtavruli] text-center text-sm md:text-lg pt-1 tracking-widest text-gray-200 hover:text-gray-100`}
    >
      {text}
    </button>
  )
}

export default Button
