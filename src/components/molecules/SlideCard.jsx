import Image from 'next/image';
import React from 'react';
// import profile from '@/assets/images/profile.png';
import { useTranslation } from 'react-i18next';
import Rating from '../atoms/Rating';

const SlideCard = ({ review = {}, className = '' }) => {
  const { t } = useTranslation();

  return (
    <div className={`${className}`}>
      <Rating stars={review?.rating} />
      <p className='mt-4 text-sm text-slateBlue rtl:text-end'>{review?.opinion}</p>
      <ul className='mt-6 flex items-center gap-4 mb-6 rtl:ms-auto rtl:flex-row-reverse'>
        <div className='h-12 w-12 bg-slate-300 rounded-full'>
          <Image
            className='rounded-full w-ful h-full flex justify-center items-center'
            src={review?.photo}
            alt='profile'
            height={48}
            width={48}
          />
        </div>
        <li className='rtl:text-end'>
          <h6 className='text-lg font-bold leading-6 -tracking-[.5px] text-blackPearl'>
            {review?.name}
          </h6>
          <p className='text-sm text-slateBlue'>
            {t(`${review?.designation}`)}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default SlideCard;
