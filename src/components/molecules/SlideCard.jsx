import Image from 'next/image';
import React from 'react';
// import profile from '@/assets/images/profile.png';
import { useTranslation } from 'react-i18next';
import Rating from '../atoms/Rating';

const SlideCard = ({ review = {} , className='' }) => {
  const { t } = useTranslation();
  return (
    <div className={`${className}`}>
      <Rating stars={review?.rating} />
      <p className='mt-4 text-sm text-slateBlue rtl:text-end'>{review?.opinion}</p>
      <ul className='mt-6 flex items-center gap-4 mb-6 rtl:ms-auto rtl:flex-row-reverse'>
        <Image
          src={review?.photo}
          alt='profile'
          height={50}
          width={50}
        />
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
