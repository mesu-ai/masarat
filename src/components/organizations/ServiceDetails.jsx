import React, { useState } from 'react';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';
import Heading2XL from '../atoms/Heading2XL';
import NextIcon from '@/assets/svgs/NextIcon';
import ParagraphText from '../atoms/ParagraphText';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import HtmlToMarkdown from '../molecules/HtmlToMarkdown';


const ServiceDetails = ({ services = [], service = {} }) => {
  const router = useRouter();

  const [selectService, setSelectService] = useState(
    router?.query?.slug ? service : services[0]
  );
  const { i18n } = useTranslation();



  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 2xl:pt-20'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-10 lg:gap-14 xl:gap-20  '>
        <div className=''>
          <Heading2XL className='text-blackPearl font-medium'>
            Service
          </Heading2XL>
          <ul className='mt-6 space-y-6'>
            {services &&
              services.map((serviceItem, index) => (
                <button
                  key={index}
                  type='button'
                  onClick={() => setSelectService(serviceItem)}
                  className={`w-full group rounded-lg shadow-lightShadow hover:bg-timberGreen  flex items-center justify-between py-3 px-5 ${serviceItem?.name === selectService?.name
                    ? 'bg-timberGreen'
                    : ''
                    }`}
                >
                  <p
                    className={`font-medium text-blackPearl group-hover:text-white ${serviceItem?.name === selectService?.name
                      ? 'text-white'
                      : ''
                      }`}
                  >
                    {i18n.language === 'en'
                      ? serviceItem?.name
                      : serviceItem?.name_ar
                        ? serviceItem?.name_ar
                        : serviceItem?.name}
                  </p>
                  <NextIcon
                    className={`group-hover:hidden rtl:rotate-180 ${serviceItem?.name === selectService?.name ? 'hidden' : ''
                      }`}
                    color='#657791 '
                  />
                  <NextIcon
                    className={`group-hover:block rtl:rotate-180 ${serviceItem?.name === selectService?.name
                      ? 'block'
                      : 'hidden'
                      }`}
                  />
                </button>
              ))}
          </ul>
        </div>
        <div className='md:col-span-2'>
          <div className='space-y-3 mb-10'>
            <HeadingL>Detail Service</HeadingL>
            <Heading5XL className='text-blackPearl font-bold'>
              {i18n.language === 'en'
                ? selectService?.name
                : selectService?.name_ar
                  ? selectService?.name_ar
                  : selectService?.name}
            </Heading5XL>
          </div>
          <div className='mt-14'>
            <HtmlToMarkdown
              content={
                i18n.language === 'en'
                  ? selectService?.serviceDetails
                  : selectService?.serviceDetails_ar
                    ? selectService?.serviceDetails_ar
                    : selectService?.serviceDetails
              }
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
