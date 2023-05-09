import PlayButtonIcon from '@/assets/svgs/PlayButtonIcon';
import { useState } from 'react';
import mob_bb from '@/assets/video/mov_bbb.mp4'


const VideoPlayer = () => {
	const [play, setPlay] = useState(false);

  // const srcvideo={`${mob_bb}`}
	
	const playPause = () => {
    const myVideo = document.getElementById('videoplayId');

		if (mob_bb && myVideo.paused) {
			myVideo.play();
			setPlay(true);
		} else if (mob_bb) {
			myVideo.pause();
			setPlay(false);
		}
	};

	return (
		<div className="text-center relative group bg-red-500">
			<video id="videoplayId" width="900" height="300" src={mob_bb} className="h-[300px]">
				<source src={mob_bb} type="video/mp4" />
				<track src="" kind="captions" srcLang="en" label="english_captions" />
			</video>
			<button
				className={`absolute inset-0 ${play ? 'hidden' : 'block'} group-hover:block`}
				type="button"
				onClick={playPause}
			>
				<PlayButtonIcon className="mx-auto" />
			</button>
		</div>
	);
};

export default VideoPlayer;


// import React, { useRef } from 'react';

// const VideoPlayer = ({ src }) => {
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     videoRef.current.play();
//   };

//   const handlePause = () => {
//     videoRef.current.pause();
//   };

//   return (
//     <div>
//       <video ref={videoRef} src={src} controls />
//       <div>
//         <button onClick={handlePlay}>Play</button>
//         <button onClick={handlePause}>Pause</button>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
