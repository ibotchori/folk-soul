import { DefaultMemberAvatar, EditPhotoIcon } from 'assets'
import React from 'react'

type Props = {}

const BandInfo = (props: Props) => {
  return (
    <>
      <div className='flex justify-center md:justify-end items-center h-screen md:mr-24 w-full '>
        {/* Content */}
        <div className='w-[77%]  h-[70vh] md:h-[80vh]  bg-[#FBFBFB] rounded-2xl flex flex-col justify-evenly items-center shadow-[inset_8px_8px_10px_0_rgba(0,0,0,0.3)]'>
          {/* Title */}
          <p className='font-[mtavruli] text-lg  tracking-widest  w-[80%] text-center border-b-2 border-gray-600 pb-5 '>
            ბენდის შესახებ
          </p>
          {/* Image */}
          <div className='relative'>
            {/* Avatar Image */}
            <img
              className='sm:w-36 w-32  sm:h-36 h-32  rounded-full border-2 border-gray-200 '
              src={DefaultMemberAvatar}
              alt='avatar'
            />

            {/* Avatar Edit Button */}
            <img
              className='absolute bottom-0 right-0 cursor-pointer pr-3'
              src={EditPhotoIcon}
              alt='Edit'
            />
          </div>

          {/* Info */}
          <p className='w-[80%] text-justify'>
            დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე
            დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა იმის
            გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა ძილში არ
            იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში იმპლანტაცია ხდება
            მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს „დაგვიანებული იმპლანტაცია“
            ეწოდება. დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში —
            ორს. ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან ჰგვანან
            პატარა ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და ბეწვის გარეშე
            იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან, მისი ნოყიერი რძით
            იკვებებიან და სწრაფად იზრდებიან. როდესაც გაზაფხულზე ისინი ბარბაცით
            გამოდიან ბუნაგიდან და მზეს ეფიცხებიან, უკვე მოზრდილები არიან
            დათვები, როგორც წესი, ეულად ბინადრობენ, თუმცა საკვების მოპოვების
            დროს ხშირად იკრიბებიან. ბელები ორი-სამი წლის განმავლობაში დედასთან
            რჩებიან. ამ პერიოდში მდედრი დათვი კიდევ მაკეობს, ამგვარად, მამრი
            დათვებიც ცხოვრების რაღაც ნაწილს ნაშიერებთან ატარებენ.საუკუნეების
            განმავლობაში დათვების ყველა სახეობაზე ნადირობდნენ. გამოსადეგია
            დათვის ხორცი, ტყავი, ცხიმი, მათ აბარებე ზოოპარკებში ან უბრალოდ
            სპორტული ინტერესის გამო ნადირობდნენ მათზე.
          </p>
        </div>
      </div>
    </>
  )
}

export default BandInfo
