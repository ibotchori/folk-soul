import React from 'react'
import { useNavigate } from 'react-router-dom'

type GoButtonProps = {
  className?: string
}

const GoBackButton: React.FC<GoButtonProps> = ({ className }) => {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(-1)}
      className={`font-[mtavruli] hover:text-[#55a5d3] text-[#3A7DA3] underline tracking-widest font-bold text-lg ${className}`}
    >
      გადი უკან
    </button>
  )
}

export default GoBackButton
