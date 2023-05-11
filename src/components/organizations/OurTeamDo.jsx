import React from 'react';
import Heading from '../molecules/Heading';
import Card from '../atoms/Card';
import Heading2XL from '../atoms/Heading2XL';
import ParagraphText from '../atoms/ParagraphText';
import PlanIcon from '@/assets/svgs/PlanIcon';
import ValidationIcon from '@/assets/svgs/ValidationIcon';
import DecisionIcon from '@/assets/svgs/DecisionIcon';

const workingProcess = [
  {
    icon: <PlanIcon />,
    title: 'Planning',
    shortDecption:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    icon: <ValidationIcon />,
    title: 'Validation',
    shortDecption:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    icon: <DecisionIcon />,
    title: 'Decision',
    shortDecption:
      'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
];

const OurTeamDo = () => {
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 text-center'>
      <Heading
        keyword='Detail Service'
        title='What Our Team Do'
      />
      <Card className='flex flex-col   md:flex-row md:justify-between  border border-mercury mt-16 p-7 lg:p-11'>
        {workingProcess?.map((process, index) => (
          <div
            key={index}
            className={`w-full  ${
              index > 0 && index + 1 !== workingProcess.length
                ? 'border-y md:border-x md:border-y-0 border-mercury my-7 md:my-0 py-7 md:py-0'
                : ''
            }`}
          >
            <div
              className={` md:mx-auto md:max-w-[243px] 2xl:max-w-sm ltr:text-start rtl:text-end   `}
              key={index}
            >
              <div className='mb-8 md:mb-16'>{process.icon}</div>
              <div className='space-y-3'>
                <Heading2XL>{process?.title}</Heading2XL>
                <ParagraphText>{process?.shortDecption}</ParagraphText>
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default OurTeamDo;
