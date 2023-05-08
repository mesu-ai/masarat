import React from 'react';
import HeadingL from '../atoms/HeadingL';
import { useTranslation } from 'react-i18next';
import Heading5XL from '../atoms/Heading5XL';
import Image from 'next/image';
import statagyIcon from '@/assets/images/stategyIcon.png';
import Card from '../atoms/Card';
import Heading2XL from '../atoms/Heading2XL';
import ParagraphText from '../atoms/ParagraphText';
import ArrowNext from '@/assets/svgs/ArrowNext';

const OurServices = () => {
  const servicedatas = [
    {
      icon: statagyIcon,
      title: 'Digital Strategy',
      shortDecption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
    },
    {
      icon: statagyIcon,
      title: 'Digital Strategy',
      shortDecption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
    },
    {
      icon: statagyIcon,
      title: 'Digital Strategy',
      shortDecption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
    },
    {
      icon: statagyIcon,
      title: 'Digital Strategy',
      shortDecption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
    },
    {
      icon: statagyIcon,
      title: 'Digital Strategy',
      shortDecption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
    },
    {
      icon: statagyIcon,
      title: 'Digital Strategy',
      shortDecption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
    },
  ];

  const { i18n } = useTranslation();
  return (
    <div className='container mx-auto px-3 sm:px-0 xl:px-5  py-0 lg:py-3'>
      <div className='text-center space-y-4'>
        <HeadingL>Our Products & Services</HeadingL>
        <Heading5XL>What You Can Get From Us</Heading5XL>
      </div>
      <div className='mt-4 grid grid-cols-3 gap-8 lg:gap-14 bg-gradient-thinGreen py-12 px-3 xl:px-5'>
        {servicedatas.map((item, index) => (
          <Card
            key={index}
            className='group space-y-4 bg-white/10  hover:bg-white px-7 py-8  shadow-lightShadow hover:shadow-hoverShadow border border-[#E5EAF1]'
          >
            <Image
              className='mb-10'
              src={item?.icon}
              alt='icon'
              width={20}
              height={20}
            />

            <Heading2XL>{item?.title}</Heading2XL>

            <ParagraphText>{item?.shortDecption}</ParagraphText>
            <button className='text-lg font-medium  text-opacity-50 group-hover:text-opacity-100  text-timberGreen flex items-center'>
              Read More{' '}
              <ArrowNext
                className={`text-opacity-50 group-hover:text-opacity-100  text-timberGreen ms-4 ${
                  i18n.language === 'en' ? '' : 'rotate-180'
                }`}
                // color={`text-opacity-50 group-hover:text-opacity-100  text-timberGreen`}
              />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
