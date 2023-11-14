import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LandingBGDesktop from '../assets/nonicons/DesktopLandingBG.png';
import LandingBGMobile from '../assets/nonicons/MobileLandingBG.png';

const LandingPage = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  });
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' });
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <div className='relative h-screen w-full'>
      <img src={isDesktopOrLaptop ? LandingBGDesktop : LandingBGMobile} className='absolute top-0 left-0 w-full h-screen object-cover -z-10'/>
      <div className='w-full h-screen flex flex-col justify-center items-center z-10 text-black'>
        this is some text
      </div>
    </div>
  )
}

export default LandingPage;
