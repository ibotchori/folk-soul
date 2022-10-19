import { DefaultMemberAvatar, EditButtonIcon, EditPhotoIcon } from 'assets'
import { Button, LinkButton, Title } from 'components'
import React, { useState } from 'react'

type Props = {}

const BandInfo = (props: Props) => {
  const [editContent, setEditContent] = useState(false)
  return (
    <>
      <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
        {/* Content */}
        <div className='w-[77%] relative  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-evenly items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
          <div className='absolute top-0 w-[80%]  '>
            {!editContent ? (
              <Title className='pt-20  text-lg !w-full' text='ბენდის შესახებ' />
            ) : (
              <Title
                className='pt-20 text-lg pb- !w-full'
                text='ბენდის შესახებ - დაარედაქტირე'
              />
            )}

            {/* Image */}
            {!editContent && (
              <div className='relative mt-5 pb-10 bg-[#FBFBFB] z-10 w-[98%] m-auto items-center flex justify-center '>
                {/* Avatar Image */}
                <img
                  className='sm:w-44 w-32  sm:h-44 h-32  rounded-full border-2 border-gray-200   '
                  src={DefaultMemberAvatar}
                  alt='avatar'
                />

                {/* Avatar Edit Button */}
                <img
                  className='absolute w-12 h-12 z-10 ml-32 mt-24 cursor-pointer shadow-[5px_5px_10px_rgba(0,0,0,0.6)] rounded-full  '
                  src={EditPhotoIcon}
                  alt='Edit'
                />
              </div>
            )}
          </div>
          {!editContent ? (
            <>
              {/* Info */}
              <div className='flex items-center w-full justify-center relative  '>
                <img
                  onClick={() => setEditContent(true)}
                  className='w-10 absolute left-0 ml-[3.3rem] mt-48 h-10 cursor-pointer  rounded-full border-2 border-gray-200 '
                  src={EditButtonIcon}
                  alt='avatar'
                />
                <div className='w-[80%] pt-52 text-sm text-justify h-[470px]  overflow-y-scroll pr-16  scrollbar-thin  scrollbar-thumb-blue-200 scrollbar-track-gray-600 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
                  <p className='px-3'>
                    თვალაუხელელნი, უკბილონი და ბეწვის გარეშე იბადებიან. პატარები
                    რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან და
                    სწრაფად იზრდებიან. როდესაც გაზაფხულზე ისინი ბარბაცით
                    გამოდიან ბუნაგიდან და მზეს ეფიცხებიან, უკვე მოზრდილები არიან
                    დათვები, როგორც წესი, ეულად ბინადრობენ, თუმცა საკვების
                    მოპოვების დროს ხშირად იკრიბებიან. ბელები ორი-სამი წლის
                    განმავლობაში დედასთან რჩებიან. ამ პერიოდში მდედრი დათვი
                    კიდევ მაკეობს, ამგვარად, მამრი დათვებიც ცხოვრების რაღაც
                    ნაწილს ნაშიერებთან ატარებენ.საუკუნეების განმავლობაში
                    დათვების ყველა სახეობაზე ნადირობდნენ. გამოსადეგია დათვის
                    ხორცი, ტყავი, ცხიმი, მათ აბარებე ზოოპარკებში ან უბრალოდ
                    სპორტული ინტერესის გამო ნადირობდნენ მათზე. რჩებიან რა
                    ბუნაგში დედასთან, მისი ნოყიერი რძით იკვებებიან და სწრაფად
                    იზრდებიან. როდესაც გაზაფხულზე ისინი ბარბაცით გამოდიან
                    ბუნაგიდან და მზეს ეფიცხებიან, უკვე მოზრდილები არიან დათვები,
                    როგორც წესი, ეულად ბინადრობენ, თუმცა საკვების მოპოვების დროს
                    ხშირად იკრიბებიან. ბელები ორი-სამი წლის განმავლობაში
                    დედასთან რჩებიან. ამ პერიოდში მდედრი დათვი კიდევ მაკეობს,
                    ამგვარად, მამრი დათვებიც ცხოვრების რაღაც ნაწილს ნაშიერებთან
                    ატარებენ.საუკუნეების განმავლობაში დათვების ყველა სახეობაზე
                    ნადირობდნენ. გამოსადეგია დათვის ხორცი, ტყავი, ცხიმი, მათ
                    აბარებე ზოოპარკებში ან უბრალოდ სპორტული ინტერესის გამო
                    ნადირობდნენ მათზე.
                    <br />
                    <br />
                    ამ პერიოდში მდედრი დათვი კიდევ მაკეობს, ამგვარად, მამრი
                    დათვებიც ცხოვრების რაღაც ნაწილს ნაშიერებთან
                    ატარებენ.საუკუნეების განმავლობაში დათვების ყველა სახეობაზე
                    ნადირობდნენ. გამოსადეგია დათვის ხორცი, ტყავი, ცხიმი, მათ
                    აბარებე ზოოპარკებში ან უბრალოდ სპორტული ინტერესის გამო
                    ნადირობდნენ მათზე. ამ პერიოდში მდედრი დათვი კიდევ მაკეობს,
                    ამგვარად, მამრი დათვებიც ცხოვრების რაღაც ნაწილს ნაშიერებთან
                    ატარებენ.საუკუნეების განმავლობაში დათვების ყველა სახეობაზე
                    ნადირობდნენ. გამოსადეგია დათვის ხორცი, ტყავი, ცხიმი, მათ
                    აბარებე ზოოპარკებში ან უბრალოდ სპორტული ინტერესის გამო
                    ნადირობდნენ მათზე. სპორტული ინტერესის გამო ნადირობდნენ
                    მათზე. ამ პერიოდში მდედრი დათვი კიდევ მაკეობს, ამგვარად,
                    მამრი დათვებიც ცხოვრების რაღაც ნაწილს ნაშიერებთან
                    ატარებენ.საუკუნეების განმავლობაში დათვების ყველა სახეობაზე
                    ნადირობდნენ. გამოსადეგია დათვის ხორცი, ტყავი, ცხიმი, მათ
                    აბარებე ზოოპარკებში ან უბრალოდ სპორტული ინტერესის გამო
                    ნადირობდნენ მათზე.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className='flex flex-col'>
              <Button text='შეინახე' className='bg-[#53C02C] h-10 mb-4 px-12' />
              <LinkButton text='გადი უკან' path={'/band-info'} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default BandInfo
