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
      <Card className='grid sm:grid-cols-3 gap-8 xl:gap-14 border border-mercury mt-16 p-11'>
        {workingProcess?.map((process, index) => (
          <div className={`text-start  ${workingProcess.length === index+1 ? '' : 'border-b sm:border-b-0 sm:border-e border-mercury pb-8 sm:pe-8 xl:pe-14'}`} key={index}>
            <div className='mb-8 md:mb-16'>{process.icon}</div>
            <div className='space-y-3'>
              <Heading2XL>{process?.title}</Heading2XL>
              <ParagraphText>{process?.shortDecption}</ParagraphText>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default OurTeamDo;
