import React from 'react'
import { useNavigate } from 'react-router-dom'

type GoButtonProps = {
  text: string
  className?: string
  path?: any
}

const LinkButton: React.FC<GoButtonProps> = ({ text, className, path }) => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(path)}
      className={`font-[mtavruli] hover:text-[#55a5d3] text-[#3A7DA3] underline tracking-widest font-bold text-lg ${className}`}
    >
      {text}
    </button>
  )
}

export default LinkButton
