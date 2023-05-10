import Image from 'next/image';
import React from 'react';
import Heading2XL from '../atoms/Heading2XL';
import profile from '@/assets/images/profile.png';
import { useTranslation } from 'react-i18next';
import Rating from '../atoms/Rating';

const SlideCard = ({review={}}) => {
  const {t}=useTranslation();
  return (
    <div>
       {/* {[...new Array(5)].map((_, index) => {
						index += 1;
						return <StarIcon key={index} color={`${index <= Math.ceil(ratings) ? '#F2B556' : '#E6E8EC'}`} />;
				})} */}
        <Rating stars={4}/>
      <p className='mt-4 text-sm text-slateBlue'>
       {review?.review}
      </p>
      <ul className='mt-6 flex items-center gap-4 mb-6'>
        <Image
          src={profile}
          alt='profile'
          height={50}
          width={50}
        />
        <li>
          <h6 className='text-lg font-bold leading-6 -tracking-[.5px] text-blackPearl'>{review?.name}</h6>
          <p className='text-sm text-slateBlue'>{t(`${review?.designation}`)}</p>
        </li>
      </ul>
    </div>
  );
};

export default SlideCard;
