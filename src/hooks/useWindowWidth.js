import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const getWindowWidth = () => {
    const { innerWidth: width, } = window;

    return {
      width,
    }
  }

  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  }, []);

  return width
}

export default useWindowWidth;