import { useState, useEffect } from 'react';

const useDeviceDetect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [isMiniTablet, setIsMiniTablet] = useState(window.innerWidth < 862);

  useEffect(() => {
    const handleMobileResize = () => setIsMobile(window.innerWidth < 600);
    const handleMiniTabletResize = () => setIsMiniTablet(window.innerWidth < 862);

    window.addEventListener('resize', handleMobileResize);
    window.addEventListener('resize', handleMiniTabletResize);

    return () => {
      window.removeEventListener('resize', handleMobileResize);
      window.removeEventListener('resize', handleMiniTabletResize);
    };
  }, []);

  return { isMobile, isMiniTablet };
};

export default useDeviceDetect;
