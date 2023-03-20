import React, { useState, useEffect, createContext } from 'react';

export const WindowSizeContext = createContext();

function WindowSizeProvider ({ children }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // const threshold = 10; // it shoul change at least so much to show changes

  useEffect(() => {
    function handleResize () {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setWindowSize({
        width: newWidth,
        height: newHeight,
        });   
      }

      window.addEventListener('resize', handleResize);
    // cleaning useEffect with eventListener
    return () => window.removeEventListener ('resize', handleResize);
  }, []);

  useEffect(() => {
    console.log('windowSize:', windowSize);
  }, [windowSize]); //dependency!!!

  return (
    <WindowSizeContext.Provider value={windowSize} >
      {children}
    </WindowSizeContext.Provider>
  );
}

export default WindowSizeProvider;
