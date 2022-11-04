import { BandLogo, Facebook, Twitter, Youtube } from 'assets'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useAppSelector } from 'app/hooks'
import { user } from 'features/auth/authSlice'

type Props = {}

const Landing = (props: Props) => {
  const navigate = useNavigate()
  const globalUser = useAppSelector(user)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard')
    }
  }, [globalUser, navigate])

  return (
    <div className='w-full px-7 lg:px-20 pt-4 h-screen'>
      {/* Header */}
      <section className='flex justify-between '>
        <img src={BandLogo} alt='Band-Logo' className='w-32 ' />
        <Link to='/login' className='text-gray-300 pt-4 font-[mtavruli]'>
          შესვლა
        </Link>
      </section>
      {/* Content */}
      <section className='flex justify-between pt-10 '>
        {/* Member's Planet and Sun - Left side */}
        <div className='w-1/2 bg-slate-100 h-56'>member animation</div>
        {/* Info - Right side */}
        <div className='w-1/2 flex justify-between flex-col items-end '>
          <div className='flex justify-between flex-col items-center'>
            {/*  Logo Image */}
            <div className='absolute bg-gradient-to-r from-[#342C46] via-[#534571] to-[#342C46] w-60 h-60 rounded-full items-center flex border-2 border-gray-200 shadow-xl'>
              <img src={BandLogo} alt='Band-Logo' />
            </div>
            {/* <div className='absolute bg-cover bg-center bg-[url("https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80")] w-60 h-60 rounded-full items-center flex border-2 border-gray-200 shadow-xl'></div> */}

            {/* Band Member Info */}
            <div className='w-[450px] h-[330px] xl:w-[550px] xl:h-[450px] bg-[#FBD560] rounded-lg pb-8 px-4  mt-24 flex flex-col justify-between  '>
              <div className='mb-28 mt-3 flex justify-between'>
                <span className='bg-[#534571] rounded-full  w-3 h-3'></span>
                <span className='bg-[#342C46] rounded-full  w-3 h-3'></span>
              </div>

              <div className=' w-full h-full overflow-y-scroll px-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200'>
                <p className='font-[arial_2009]'>
                  დაწყვილების პერიოდი ზომიერ და არქტიკულ რეგიონებში მობინადრე
                  დათვებისთვის, ჩვეულებრივ, გაზაფხულია. მაკეობა ხანმოკლეა, თუმცა
                  იმის გამო, რომ დათვი არ მშობიარობს მანამ, სანამ ზამთრის შუა
                  ძილში არ იქნება, განაყოფიერებული კვერცხუჯრედის საშვილოსნოში
                  იმპლანტაცია ხდება მხოლოდ ოქტომბე-ნოემბერში, ამ პროცესს
                  „დაგვიანებული იმპლანტაცია“ ეწოდება. <br /> <br />
                  დათვი შობს წარმოუდგენლად პატარა ბელებს, ხშირ შემთხვევაში —
                  ორს. ახალშობილები მხოლოდ 200-700 გრამს იწონიან და ძალიან
                  ჰგვანან პატარა ვირთხებს. ისინი თვალაუხელელნი, უკბილონი და
                  ბეწვის გარეშე იბადებიან. პატარები რჩებიან რა ბუნაგში დედასთან,
                  მისი ნოყიერი რძით იკვებებიან და სწრაფად.
                </p>
              </div>
            </div>
            {/* Social Links */}
            <div className='flex justify-evenly pt-4 w-[70%]'>
              <Link to={''} className='text-gray-300 '>
                <img src={Twitter} alt='Band-Logo' className='w-12 h-8  ' />
              </Link>
              <Link to={''} className='text-gray-300 '>
                <img src={Facebook} alt='Band-Logo' className='w-8 h-8 ' />
              </Link>
              <Link to={''} className='text-gray-300 '>
                <img src={Youtube} alt='Band-Logo' className='w-10 h-8  ' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Landing
