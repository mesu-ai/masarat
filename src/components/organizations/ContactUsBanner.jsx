import contactCover from '@/assets/images/contactCover.png';
import Image from 'next/image';
import React from 'react';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';
import ParagraphText from '../atoms/ParagraphText';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import { useTranslation } from 'react-i18next';

const ContactUsBanner = () => {
  const { t,i18n } = useTranslation();
  console.log(t,i18n)
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  py-0 lg:py-3 mt-28'>
      <Card className='grid sm:grid-cols-2 bg-lightGreen/50'>
      <div className=''>
        <Image
          className='-mt-20 mx-auto'
          src={contactCover}
          alt=''
        />
      </div>
      <div className='-ms-20 text-center my-auto space-y-4 pe-10'>
        <HeadingL>Contact us</HeadingL>
        <Heading5XL>
          We help you to grow your business faster & easier.
        </Heading5XL>
        <ParagraphText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididun.
        </ParagraphText>
        <Button title='Contact Us'/>
      </div>
    </Card>

    </div>
    
  );
};

export default ContactUsBanner;
