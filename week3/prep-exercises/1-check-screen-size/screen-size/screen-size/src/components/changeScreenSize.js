import { useState, useEffect, useDebugValue } from 'react';


function useScreenSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize () {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    // cleaning useEffect with eventListener
    return () => window.removeEventListener ('resize', handleResize);
  }, []);

  useDebugValue(windowSize, (windowSize) => {
    return `Width: ${windowSize.width}, Height: ${windowSize.height}`;
  });

  return windowSize;
}

export default useScreenSize;
