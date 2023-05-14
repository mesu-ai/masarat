import React from 'react';
import HeadingL from '../atoms/HeadingL';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import statagyIcon from '@/assets/images/stategyIcon.png';
import Card from '../atoms/Card';
import Heading2XL from '../atoms/Heading2XL';
import ParagraphText from '../atoms/ParagraphText';
import ArrowNext from '@/assets/svgs/ArrowNext';
import Heading from '../molecules/Heading';
import Link from 'next/link';

// const servicedatas = [
//   {
//     icon: statagyIcon,
//     title: 'Digital Strategy',
//     shortDecption:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
//   },
//   {
//     icon: statagyIcon,
//     title: 'Digital Strategy',
//     shortDecption:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
//   },
//   {
//     icon: statagyIcon,
//     title: 'Digital Strategy',
//     shortDecption:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
//   },
//   {
//     icon: statagyIcon,
//     title: 'Digital Strategy',
//     shortDecption:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
//   },
//   {
//     icon: statagyIcon,
//     title: 'Digital Strategy',
//     shortDecption:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
//   },
//   {
//     icon: statagyIcon,
//     title: 'Digital Strategy',
//     shortDecption:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
//   },
// ];

const OurServices = ({ services = [] }) => {
  const {t, i18n } = useTranslation();
  return (
    <div className='container mx-auto px-3 sm:px-0 xl:px-5  mb-20 xl:mb-36'>
      <Heading
        className='text-center'
        keyword='Our Products & Services'
        title='What You Can Get From Us'
      />
      <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-14 bg-gradient-thinGreen py-12 px-3 xl:px-5'>
        {services &&
          services.map((item, index) => (
            <Card
              key={index}
              className='group space-y-4 bg-white/10  hover:bg-white px-7 py-8  shadow-deepShadow hover:shadow-lightShadow border border-[#E5EAF1]'
            >
              <Image
                className='mb-10'
                src={item?.icon}
                alt='icon'
                width={20}
                height={20}
              />

              <Heading2XL>
                {i18n.language === 'en'
                  ? item?.name
                  : item?.name_ar
                  ? item?.name_ar
                  : item?.name}
              </Heading2XL>

              <ParagraphText className='truncate-4-lines text-slateBlue'>
                {i18n.language === 'en'
                  ? item?.shortDescription
                  : item?.shortDescription_ar
                  ? item?.shortDescription_ar
                  : item?.shortDescription}
              </ParagraphText>
             

              <Link href={`/service/${item?.slug}`}>
              <button className='mt-4 text-lg font-medium  text-opacity-50 group-hover:text-opacity-100  text-timberGreen flex items-center'>
                {t('Read More')}
                <ArrowNext
                  className={`text-opacity-0 group-hover:text-opacity-20  text-timberGreen  ${
                    i18n.language === 'en' ? 'ms-3' : 'rotate-180 me-3'
                  }`}
                  // color={`text-opacity-50 group-hover:text-opacity-100  text-timberGreen`}
                />
              </button>
              
              </Link>
              
            </Card>
          ))}
      </div>
    </div>
  );
};

export default OurServices;
