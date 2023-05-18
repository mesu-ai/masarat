import contactCover from '@/assets/images/contactCover.png';
import Image from 'next/image';
import React from 'react';
import ParagraphText from '../atoms/ParagraphText';
import Button from '../atoms/Button';
import Card from '../atoms/Card';
import { useTranslation } from 'react-i18next';
import Heading from '../molecules/Heading';
import Link from 'next/link';
import Heading5XL from '../atoms/Heading5XL';
import HeadingL from '../atoms/HeadingL';

const ContactUsBanner = ({contactBanner={}}) => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  py-0 lg:py-3 mt-36 mb-20'>
      <Card className='grid md:grid-cols-2 rounded-[32px] bg-lightGreen/50 py-10 px-10 md:py-0'>
        <div className='hidden md:block'>
          <Image
            className='lg:-mt-20 mx-auto rtl:-scale-x-100'
            src={contactCover}
            alt=''
          />
        </div>
        <div className='text-center my-auto space-y-3 lg:space-y-4 px-10 sm:px-3  ltr:md:-ms-20 rtl:md:-me-20   lg:pe-10'>
          {/* <Heading
            keyword='Contact us' title=''
            // title='We help you to grow your business faster & easier.'
          /> */}
           <HeadingL>Contact us</HeadingL>
           <Heading5XL className='truncate-2-lines text-blackPearl font-medium'>{i18n.language === 'en'
                  ? contactBanner?.title
                  : contactBanner?.title_ar
                  ? contactBanner?.title_ar
                  : contactBanner?.title}
            </Heading5XL>

          <ParagraphText className='truncate-2-lines text-slateBlue'>
          {i18n.language === 'en'
                  ? contactBanner?.shortDescription
                  : contactBanner?.shortDescription_ar
                  ? contactBanner?.shortDescription_ar
                  : contactBanner?.shortDescription}
          </ParagraphText>
          <div>
            <Link
              href='/contactUs'
              className='mt-4'
            >
              <Button title='Contact Us' />
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactUsBanner;
