import SupportIcon from '@/assets/svgs/SupportIcon';
import React from 'react';
import HeadingXL from '../atoms/HeadingXL';
import Heading6XL from '../atoms/Heading6XL';
import ParagraphText from '../atoms/ParagraphText';
import Button from '../atoms/Button';
import { useTranslation } from 'react-i18next';
import SliderShow from '../molecules/SliderShow';
import SlideCard from '../molecules/SlideCard';
import { getAllData } from '@/lib/customApi';
import Link from 'next/link';


const HeroSection = ({ clientReviews = [],heroSection={} }) => {
  const { t,i18n } = useTranslation();

  // console.log(heroSection);

  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  py-0 lg:py-3 '>
      <div className='grid grid-cols-3 lg:grid-cols-2'>
        <div className=' col-span-3 sm:col-span-2 lg:col-span-1'>
          <li className='list-none flex items-center gap-6 mb-6'>
            <SupportIcon />
            <HeadingXL>{i18n.language === 'en'
                  ? heroSection?.titleKeyword
                  : heroSection?.titleKeyword_ar
                  ? heroSection?.titleKeyword_ar
                  : heroSection?.titleKeyword}
            </HeadingXL>
          </li>
          <Heading6XL>{i18n.language === 'en'
                  ? heroSection?.title
                  : heroSection?.title_ar
                  ? heroSection?.title_ar
                  : heroSection?.title}
                  </Heading6XL>
          <ParagraphText className='text-slateBlue mt-10'>
          {i18n.language === 'en'
                  ? heroSection?.shortDescription
                  : heroSection?.shortDescription_ar
                  ? heroSection?.shortDescription_ar
                  : heroSection?.shortDescription}
          </ParagraphText>

          <Link href='/contactUs'>
            <Button
              title='Contact Us'
              className='bg-gradient-lightGreen text-slateBlue mt-8'
            ></Button>
          </Link>

          <div className='mt-8 lg:mt-16 '>
            <SliderShow>
              {clientReviews &&
                clientReviews?.map((review, index) => (
                  <SlideCard
                    key={index}
                    review={review}
                  />
                ))}
            </SliderShow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

