import React from 'react';
import logo from '@/assets/logoWhite.svg';
import NavLink from '@/components/atoms/NavLink';
import Image from 'next/image';
import footerRoutes from '@/routes/footerRoutes';

const Footer = () => {
  return (
    <footer className='bg-gradient-darkBlack'>
      <div className='container mx-auto px-6 sm:px-0 xl:px-10  py-5 md:pt-14 md:pb-11'>
        <div className='grid grid-cols-1 md:grid-cols-2  text-center md:text-start gap-3'>
          <div className=''>
            <NavLink path='/'>
              <Image
              className='mx-auto md:mx-0'
                src={logo}
                alt='logo'
              />
            </NavLink>
            <p className='text-sm text-white/50  xl:max-w-md'>
              Masarat Digital Company is advance technology enabler in various
              industries/ tracks / paths (HR, Healthcare,Supply Chain & Sports).
              For the consulting area.
            </p>
          </div>
          <div className='grid  sm:grid-cols-3 mt-7 md:mt-0  gap-3 '>
            {footerRoutes &&
              footerRoutes.map((item, index) => (
                <ul key={index}>
                  <li className='text-white font-bold mb-6'>{item?.title}</li>
                  {item?.lists.map((listItem, idx) => (
                    <li key={idx} className='text-white/50 text-sm leading-8'>{listItem?.name}</li>
                  ))}
                </ul>
              ))}
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row md:justify-between mt-6 gap-10'>
          <p className='text-center md:text-start text-sm font-medium text-white'>
            © Copyright 2023, All Rights Reserved by Masarat Digital
          </p>
          <div className='text-center md:text-end text-white'>
            Follow us on:
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
