/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import Heading5XL from '../atoms/Heading5XL';
import ParagraphText from '../atoms/ParagraphText';
import Heading2XL from '../atoms/Heading2XL';
import projectManager from '@/assets/images/projectManager.png';
import { useTranslation } from 'react-i18next';


const ProjectManagerInfo = ({aboutManagement={}}) => {
  const {i18n}=useTranslation();
  // console.log({aboutManagement})

  return (
    <div className='container mx-auto grid sm:grid-cols-3 gap-10 xl:gap-20 px-6 sm:px-0 xl:px-10  py-0 lg:py-3 mb-20 xl:mb-36'>
      <div className='text-center'>
        <Image
          className='rounded-3'
          src={aboutManagement?.photo}
          alt='pm_photo'
          height={328}
          width={468}
        />
      </div>
      <div className='col-span-2  my-auto'>
        <div className='space-y-6'>
          <Heading5XL>
          {i18n.language === 'en'
                ? aboutManagement?.quote?.title
                : aboutManagement?.quote?.title_ar
                ? aboutManagement?.quote?.title_ar
                : aboutManagement?.quote?.title}
          </Heading5XL>

          <ParagraphText>
          {i18n.language === 'en'
                ? aboutManagement?.quote?.description
                : aboutManagement?.quote?.description_ar
                ? aboutManagement?.quote?.description_ar
                : aboutManagement?.quote?.description}
          </ParagraphText>
        </div>
        <ul className='mt-10 flex gap-10'>
          <li className=''>
            <Heading2XL>{aboutManagement?.name}</Heading2XL>
            <ParagraphText>{aboutManagement?.designation}</ParagraphText>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectManagerInfo;
