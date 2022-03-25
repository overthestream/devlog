import { useEffect } from 'react';

const useScroll = (handleScroll: () => void): void => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);
};

export default useScroll;
