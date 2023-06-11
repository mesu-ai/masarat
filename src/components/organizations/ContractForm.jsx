/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import Heading from '../molecules/Heading';
import LocationIcon from '@/assets/svgs/LocationIcon';
import ParagraphText from '../atoms/ParagraphText';
import PhoneIcon from '@/assets/svgs/PhoneIcon';
import EmailIcon from '@/assets/svgs/EmailIcon';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

const ContractForm = ({ contactInfo = {} }) => {
  const [data, setData] = useState({});
  const { t } = useTranslation();

  const handleBlur = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const newArr = { ...data };
    newArr[name] = value;
    setData(newArr);
  };

  const handleSubmit = (e) => {
    console.log(data)
    // toast.success('Message Sent Successfully !');
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
   
    e.preventDefault();

  };


  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 2xl:pt-20'>
      <div className='shadow-lightShadow grid md:grid-cols-2  gap-10 lg:gap-14  px-10 lg:px-16 py-8 lg:py-12  '>
        <div>
          <div className='space-y-4 mb-10'>
            <HeadingL>Contact us</HeadingL>
            <Heading5XL className='text-blackPearl font-bold'>
              Contact Our Team,Feel free to talk about anything.
            </Heading5XL>
          </div>

          <ul className='space-y-8'>
            <li className='flex items-center gap-5'>
              <LocationIcon />
              <ParagraphText>{contactInfo?.location || ''}</ParagraphText>
            </li>
            <li className='flex items-center gap-5'>
              <PhoneIcon />
              <ParagraphText>{contactInfo?.phone || ''}</ParagraphText>
            </li>
            <li className='flex items-center gap-5'>
              <EmailIcon />
              <ParagraphText>{contactInfo?.email || ''}</ParagraphText>
            </li>
          </ul>
        </div>
        <div className='my-auto mt-5 md:mt-auto'>
          <form className='space-y-8' onSubmit={handleSubmit}>
            <InputField name='name' placeholder='Name' handleBlur={handleBlur} />
            <div className='grid sm:grid-cols-2 gap-7'>
              <InputField name='email' type='email' placeholder='Email' handleBlur={handleBlur} />
              <InputField name='phone' type='number' placeholder='Phone' handleBlur={handleBlur} />
            </div>
            <textarea
              className={`w-full text-sm text-slateBlue p-3 placeholder:text-slateBlue outline-0 border border-lightwhite`}
              name='description'
              id='description'
              onBlur={handleBlur}
              placeholder={t('Your Quenstions')}
              rows={5}
            />

            <Button
              type='submit'
              title='Send Message'
              className='bg-gradient-lightGreen text-slateBlue'></Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContractForm;
