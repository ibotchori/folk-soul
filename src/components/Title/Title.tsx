import React from 'react'

type TitleProps = {
  text: string
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <p className='font-[mtavruli] text-lg  tracking-widest  w-[80%] text-center border-b-2 border-gray-600 pb-5 '>
      {text}
    </p>
  )
}

export default Title
