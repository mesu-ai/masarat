import React from 'react';
import SliderShow from '../molecules/SliderShow';
import Image from 'next/image';
import team1 from '@/assets/images/team1.png';
import team2 from '@/assets/images/team2.png';
import team3 from '@/assets/images/team3.png';
import team4 from '@/assets/images/team4.png';
import Card from '../atoms/Card';
import HeadingL from '../atoms/HeadingL';

const teamMeambers = [
  { photo: team1, name: 'AA', designation: 'CEO' },
  { photo: team2, name: 'BB', designation: 'Digital Marketer' },
  { photo: team4, name: 'CC', designation: 'CEO' },
  { photo: team3, name: 'DD', designation: 'CEO' },
  { photo: team2, name: 'EE', designation: 'CEO' },
  { photo: team4, name: 'FF', designation: 'CEO' },
  { photo: team3, name: 'GG', designation: 'CEO' },
];

const OurTeam = () => {
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 text-center mt-36'>
      <p className='font-medium text-slateGray'>
        Over 1,700+ trusted partner around the world
      </p>
      <div className='max-w-4xl mx-auto mt-12'>
        <SliderShow
          slidePerPage={5}
          showDot={false}
        >
          {teamMeambers &&
            teamMeambers.map((item, index) => (
                
// bg-white/10 hover:bg-white shadow-lightShadow
// hover:shadow-hoverShadow

              <div key={index} className='bg-red-300 p-10'>
                
                <Card
                  key={index}
                  className='group relative rounded-2xl  mx-3 '
                >
                  <Image
                    className='h-44 w-48 group-hover:h-64 hover:w-72  group-hover:-mt-7'
                    src={item?.photo}
                    alt='icon'
                    // width={20}
                    // height={20}
                  />

                  <div className='z-40 hidden group-hover:block absolute bottom-5 right-5 bg-white rounded-lg px-2 py-2 xl:py-3.5 xl:px-5'>
                    <p className='text-sm font-bold text-blackPearl'>
                      {item?.name}
                    </p>
                    <p className='text-sm font-medium text-slateBlue'>
                      {item?.designation}
                    </p>
                  </div>
                </Card>
              </div>

              // <div key={index} className='mx-5 '>
              //   <Image
              //     className='h-7 w-32'
              //     key={index}
              //     src={item?.photo}
              //     // width='auto'
              //     alt='partner_logo'
              //   />
              // </div>
            ))}
        </SliderShow>
      </div>
    </div>
  );
};

export default OurTeam;
