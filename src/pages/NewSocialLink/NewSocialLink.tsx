import { Button, LinkButton, Input, Title } from 'components'

type Props = {}

const NewSocialLink = (props: Props) => {
  return (
    <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
      {/* Content */}
      <div className='w-[77%]  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-between items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
        {/* Title */}
        <Title
          className='pb-5 pt-16 text-xs md:text-lg'
          text='დაამატე სოციალური ბმული'
        />
        {/* Form */}
        <div className='flex flex-col gap-3 md:gap-8 items-center w-full lg:w-[60%]'>
          <div className=' w-[60%] md:w-[40%]'>
            <Input id='name' type='text' placeholder='სახელი' />
          </div>
          <div className=' w-[60%] md:w-[70%]'>
            <Input id='name' type='text' placeholder='ბმული' />
          </div>
        </div>
        {/* Add new member button */}
        <div className='flex flex-col gap-3 pb-3 md:pb-40'>
          <Button
            text='დაამატე სოციალური ბმული'
            backgroundColor='bg-primaryBG'
          />
          <LinkButton text='გადი უკან' className='pt-8' path={-1} />
        </div>
      </div>
    </div>
  )
}

export default NewSocialLink
