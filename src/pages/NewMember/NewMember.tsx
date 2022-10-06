import { Button, GoBackButton, Input, Title } from 'components'

type Props = {}

const NewMember = (props: Props) => {
  return (
    <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
      {/* Content */}
      <div className='w-[77%]  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-between items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
        {/* Title */}
        <Title
          className='pt-10 text-xs md:text-lg pb-5'
          text='დაამატე ჯგუფის ახელი წევრი'
        />
        {/* Form */}
        <div className='flex flex-col gap-3 md:gap-8 items-center w-full lg:w-[60%]'>
          <div className=' w-[60%] md:w-[40%]'>
            <Input id='name' type='text' placeholder='სახელი' />
          </div>
          <div className='flex gap-1 md:gap-10 w-[90%] md:w-[70%]'>
            <Input id='instrument' type='text' placeholder='ინსტრუმენტი' />
            <Input id='orbit' type='number' placeholder='ორბიტის სიგანე' />
            <Input id='color' type='color' placeholder='ფერი' />
          </div>
          <div className='w-[95%] md:w-[80%]'>
            <textarea
              rows={8}
              id='info'
              className='  bg-gray-50 text-gray-900 text-sm rounded-lg border-gray-400 focus:outline-none focus:border-gray-500  focus:ring-gray-500  block w-full p-4 border-2 '
              placeholder='ბიოგრაფია'
              required
            ></textarea>
          </div>
        </div>
        {/* Add new member button */}
        <div className='flex flex-col gap-3 pb-3 md:pb-10'>
          <Button text='დაამატე წევრი' backgroundColor='bg-primaryBG' />
          <GoBackButton />
        </div>
      </div>
    </div>
  )
}

export default NewMember
