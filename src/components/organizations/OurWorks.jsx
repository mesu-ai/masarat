import React, { useRef, useState } from 'react';
import Heading from '../molecules/Heading';
// import VideoPlayer from '../molecules/VideoPlayer';
// import cartoon from '@/assets/video/cartoon.mp4';

const OurWorks = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState(false);

  const handlePlay = ({
    src = 'https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1',
  }) => {
    setIsPlaying(true);
    setError(false);
    videoRef.current.play().catch(() => {
      setError(true);
    });
  };

  const handlePause = () => {
    setIsPlaying(false);
    setError(false);
    videoRef.current.pause();
  };

  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 text-center'>
      <Heading
        className='mb-6 sm:mb-10 lg:mb-16'
        keyword='Our Works'
        title='This is How We Works'
      />
      <div className='flex justify-center rounded-3xl mt-16'>
        <iframe
        className='rounded-3xl'
          width='900'
          height='505'
          src='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'
        ></iframe>
      </div>
    </div>
  );
};

export default OurWorks;
