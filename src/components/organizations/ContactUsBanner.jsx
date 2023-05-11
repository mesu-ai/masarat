import contactCover from '@/assets/images/contactCover.png';
import Image from 'next/image';
import React from 'react';
import ParagraphText from '../atoms/ParagraphText';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import { useTranslation } from 'react-i18next';
import Heading from '../molecules/Heading';

const ContactUsBanner = () => {
  const { t, i18n } = useTranslation();
  // console.log(t, i18n);
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  py-0 lg:py-3 mt-28 mb-20'>
      <Card className='grid md:grid-cols-2 rounded-[32px] bg-lightGreen/50 py-10 px-10 md:py-0'>
        <div className='hidden md:block'>
          <Image
            className='lg:-mt-20 mx-auto rtl:-scale-x-100'
            src={contactCover}
            alt=''
          />
        </div>
        <div className='text-center my-auto space-y-3 lg:space-y-4 px-10 sm:px-3  ltr:md:-ms-20 rtl:md:-me-20   lg:pe-10'>
          <Heading
            keyword='Contact us'
            title='We help you to grow your business faster & easier.'
          />
          <ParagraphText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididun.
          </ParagraphText>
          <Button title='Contact Us' />
        </div>
      </Card>
    </div>
  );
};

export default ContactUsBanner;
