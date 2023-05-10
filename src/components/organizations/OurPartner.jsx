import React from 'react';
import SliderShow from '../molecules/SliderShow';
import bitcoin from '@/assets/images/bitcoin.png';
import binance from '@/assets/images/binance.png';
import ethereum from '@/assets/images/ethereum.png';
import litecoin from '@/assets/images/litecoin.png';
import visa from '@/assets/images/visa.png';
import Image from 'next/image';

const partners = [
  { logo: bitcoin },
  { logo: visa },
  { logo: litecoin },
  { logo: binance },
  { logo: ethereum },
];

const OurPartner = () => {
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 text-center mt-36'>
      <p className='font-medium text-slateGray'>
        Over 1,700+ trusted partner around the world
      </p>
      <div className='max-w-4xl mx-auto mt-12'>
        <SliderShow
          slidePerPage={4}
          showDot={false}
          
        >
          {partners &&
            partners.map((item, index) => (
              
              <div key={index} className='mx-5 '>
                <Image
                  className='h-7 w-32'
                  key={index}
                  src={item?.logo}
                  // width='auto'
                  alt='partner_logo'
                />
              </div>
            ))}
        </SliderShow>
      </div>
    </div>
  );
};

export default OurPartner;
