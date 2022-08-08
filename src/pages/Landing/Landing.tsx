import { BandLogo } from 'assets';
import { Link } from 'react-router-dom';
import React from 'react';

type Props = {};

const Landing = (props: Props) => {
  return (
    <div className='w-full flex justify-between px-20 pt-4'>
      <img src={BandLogo} alt='Band-Logo' className='w-32 ' />
      <Link to={''} className='text-gray-300 pt-4'>
        შესვლა
      </Link>
    </div>
  );
};

export default Landing;
