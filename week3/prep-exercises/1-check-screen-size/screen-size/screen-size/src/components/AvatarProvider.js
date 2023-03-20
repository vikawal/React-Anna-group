import React, { useState, useEffect, useContext, useDebugValue, createContext } from 'react';
import {BigHead} from '@bigheads/core';
import { WindowSizeContext } from './WindowSizeProvider.js';
export const AvatarContext = createContext ({});



function useWindowSize(minWidth, maxWidth) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useDebugValue(`window size: ${windowSize.width}*${windowSize.height}`);

  useEffect(() => {
    function handleResize () {
      const {innerWidth} = window;
      if (innerWidth >= minWidth && innerWidth <= maxWidth) {
        setWindowSize ({
          width: innerWidth,
          height: window.innerHeight,
        });
        updateAvatarAppearance(innerWidth, setAvatars, avatars);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth, maxWidth, setWindowSize]);
  return windowSize;
}

function updateAvatarAppearance (width, setAvatars, avatars) {
  const updatedAvatars = { ...avatars };
  switch (true) {
    case width > 1000:
      // Update Mithi's appearance for big screens
      updatedAvatars.mithi = {
        ...avatars.mithi,
        hat: 'none',
        hatColor: 'red',
        accessory: 'none',
        clothingColor: 'blue',
        graphic: "gatsby",
      };
      updatedAvatars.diana = {
        ...avatars.diana,
        hat: "turban",
        hatColor: 'red',
        accessory: 'none',
        clothingColor: "green",
        graphic: 'redwood',
      };
      updatedAvatars.mikong = {
        ...avatars.mikong,
        hat: "none",
        hatColor: 'red',
        accessory: 'none',
        clothingColor: "white",
        graphic: 'redwood',
      };
      break;
    case width < 700:
      // Update Mikong's appearance for small screens
      updatedAvatars.mikong = {
        ...avatars.mikong,
        hat: "beanie",
        hatColor: 'green',
        accessory: 'rondGlasses',
        clothingColor: "white",
        graphic:'redwood',
      };
      break;
    default:
      // Reset all avatars to their default appearance for medium screens
      updatedAvatars.mithi = {
        ...avatars.mithi,
        hat: 'none3',
        hatColor: 'green',
        accessory: 'shades',
        clothingColor: 'green',
        graphic: "vue",
      };
      updatedAvatars.diana = {
        ...avatars.diana,
        hat: "turban",
        hatColor: 'red',
        accessory: 'tinyGlasses',
        clothingColor: "red",
        graphic: 'react',
      };
      updatedAvatars.mikong = {
        ...avatars.mikong,
        hat: "none5",
        hatColor: 'blue',
        accessory: 'none',
        clothingColor: "white",
        graphic: 'redwood',
      };
      break;
  }
    setAvatars(updatedAvatars);
  }


function AvatarProvider({ children }) {
  const windowSize = useContext(WindowSizeContext);
  const [size, setSize] = useState({ width: 0, height: 0 });
  // const size = useWindowSize(701, 999);
  const[avatar, setAvatar] = useState(null);
  const [avatars, setAvatars] = useState({
    mithi: {
      name: 'mithi',
      data: {
        accessory: 'shades',
        body: 'chest',
        circleColor: 'blue',
        clothing: 'tankTop',
        clothingColor: 'green',
        eyebrows: 'serious',
        eyes: 'happy',
        facialHair: 'mediumBeard',
        graphic: 'vue',
        hair: 'afro',
        hairColor: 'blonde',
        hat: 'none3',
        hatColor: 'green',
        lashes: true,
        lipColor: 'purple',
        mask: true,
        faceMask: true,
        mouth: 'openSmile',
        skinTone: 'brown',
      },
    },
    diana: {
      name: "Diana",
      data: {
        accessory: 'tinyGlasses',
        body: 'breasts',
        circleColor: 'blue',
        clothing: 'dress',
        clothingColor: 'red',
        eyebrows: 'raised',
        eyes: 'wink',
        facialHair: 'none2',
        graphic: 'react',
        hair: 'pixie',
        hairColor: 'orange',
        hat: 'turban',
        hatColor: 'red',
        lashes: true,
        lipColor: 'green',
        mask: false,
        faceMask: false,
        mouth: 'tongue',
        skinTone: 'yellow',
      },
    },
    mikong: {
      name: "Mikong",
      data: {
        accessory: 'none',
        body: 'breasts',
        circleColor: 'blue',
        clothing: 'vneck',
        clothingColor: 'white',
        eyebrows: 'angry',
        eyes: 'heart',
        facialHair: 'none3',
        graphic: 'redwood',
        hair: 'short',
        hairColor: 'brown',
        hat: 'none5',
        hatColor: 'blue',
        lashes: false,
        lipColor: 'red',
        mask: false,
        faceMask: true,
        mouth: 'open',
        skinTone: 'light',
      },
    },
  });

  useEffect(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    updateAvatarAppearance(size.width, setAvatars, avatars);
  }, [size, avatars]);
    //   window.addEventListener("resize", () => {
    //   updateAvatarAppearance(size.width, setAvatars, avatars);
    // });

    //   return() => {
    //     window.removeEventListener("resize", () => {
    //      updateAvatarAppearance(size.width, setAvatars, avatars);
    //     });
    //   };
    // }, [size.width, avatars]);

    return ( 
    <AvatarContext.Provider value={{avatar, setAvatar}}>
      {children}
      </AvatarContext.Provider>
    );}

export default AvatarProvider;
  
  
//   useEffect(() => {
//     if (windowSize.width >= 1000) {
//       setAvatar ({
//         name: 'mithi',
//         data: {
//           accessory: 'shades',
//           body: 'chest',
//           circleColor: 'blue',
//           clothing: 'tankTop',
//           clothingColor: 'green',
//           eyebrows: 'serious',
//           eyes: 'happy',
//           facialHair: 'mediumBeard',
//           graphic: 'vue',
//           hair: 'afro',
//           hairColor: 'blonde',
//           hat: 'none3',
//           hatColor: 'green',
//           lashes: true,
//           lipColor: 'purple',
//           mask: true,
//           faceMask: true,
//           mouth: 'openSmile',
//           skinTone: 'brown',
//         },
//       });
//     } else if (size.width >=701 && size.width<=999) {
//       setAvatar ({
//         name: "Diana",
//         data: {
//           accessory: 'tinyGlasses',
//           body: 'breasts',
//           circleColor: 'blue',
//           clothing: 'dress',
//           clothingColor: 'red',
//           eyebrows: 'raised',
//           eyes: 'wink',
//           facialHair: 'none2',
//           graphic: 'react',
//           hair: 'pixie',
//           hairColor: 'orange',
//           hat: 'turban',
//           hatColor: 'red',
//           lashes: true,
//           lipColor: 'green',
//           mask: false,
//           faceMask: false,
//           mouth: 'tongue',
//           skinTone: 'yellow',
//         },
//       });
//     } else {
//       setAvatar({
//         name: "Mikong",
//         data: {
//           accessory: 'none',
//           body: 'breasts',
//           circleColor: 'blue',
//           clothing: 'vneck',
//           clothingColor: 'white',
//           eyebrows: 'angry',
//          eyes: 'heart',
//          facialHair: 'none3',
//          graphic: 'redwood',
//          hair: 'short',
//          hairColor: 'brown',
//          hat: 'none5',
//          hatColor: 'blue',
//          lashes: false,
//          lipColor: 'red',
//          mask: false,
//          faceMask: true,
//          mouth: 'open',
//          skinTone: 'light',
//         },
//       });
//     }
//   }, [windowSize, size]);

//   if (!avatar) {
//     return null;
//   }

//   useEffect(() => {
//     function updateAvatarAppearance() {
//       const { width } = windowSize;
//       const updatedAvatars = { ...avatars };
  
//       if (width > 1000) {
//         // Update Mithi's appearance for big screens
//         updatedAvatars.mithi = {
//           ...avatars.mithi,
//           hat: 'none',
//           hatColor: 'red',
//           accessory: 'none',
//           clothingColor: 'blue',
//           graphic: "gatsby",
//         };
//         updatedAvatars.diana = {
//           ...avatars.diana,
//           hat: "turban",
//           hatColor: 'red',
//           accessory: 'none',
//           clothingColor: "green",
//           graphic: 'redwood',
//         };
//         updatedAvatars.mikong = {
//           ...avatars.mikong,
//           hat: "none",
//           hatColor: 'red',
//           accessory: 'none',
//           clothingColor: "white",
//           graphic: 'redwood',
//         };
//       } else if (width < 700) {
//         // Update Mikong's appearance for small screens
//         updatedAvatars.mikong = {
//           ...avatars.mikong,
//           hat: "beanie",
//           hatColor: 'green',
//           accessory: 'rondGlasses',
//           clothingColor: "white",
//           graphic: 'graphQL',
//         };
//       } else {
//         // Update Diana's appearance for medium screens
//         updatedAvatars.diana = {
//           ...avatars.diana,
//           hat: "turban",
//           hatColor: 'red',
//           accessory: 'none',
//           clothingColor: "green",
//           graphic: 'redwood',
//         };
//       }
    
      
//       setAvatars(updatedAvatars);
//     }
//     updateAvatarAppearance ();
//   }, [windowSize]);

//   return (
//     <>
//     {Object.entries(avatars).map(([name, data]) =>
//     <div key={name}>
//       <h2>{name}</h2>
//       <BigHead
//         data={data}
//         bgShape="circle"
//         size={50}
//       />

//     </div>
//     )}
//     </>
//   );
// }
// export default AvatarProvider;





// import React, { useState, useEffect, useContext, useDebugValue } from 'react';
// import {BigHead} from '@bigheads/core';
// import { WindowSizeContext } from './WindowSizeProvider.js';

// function useWindowSize(minWidth, maxWidth) {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useDebugValue(`window size: ${windowSize.width}*${windowSize.height}`);

//   useEffect(() => {
//     function handleResize () {
//       const {innerWidth} = window;
//       if (innerWidth >= minWidth && innerWidth <= maxWidth) {
//         setWindowSize ({
//           width: innerWidth,
//           height: window.innerHeight,
//         });
//       }
//     }

//     window.addEventListener("resize", handleResize);
//     return() => {
//       window.removeEventListener("resize". handleResize);
//     };
//   }, [minWidth, maxWidth]);
//   return windowSize;
// }

// function AvatarProvider({ children }) {
//   const windowSize = useContext(WindowSizeContext);
//   const size = useWindowSize(701, 999);
//   const[avatar, setAvatar] = useState(null);

//   useEffect(() => {
//     if (windowSize.width >= 1000) {
//       setAvatar ({
//         name: 'mithi',
//         data: {
//           accessory: 'shades',
//           body: 'chest',
//           circleColor: 'blue',
//           clothing: 'tankTop',
//           clothingColor: 'green',
//           eyebrows: 'serious',
//           eyes: 'happy',
//           facialHair: 'mediumBeard',
//           graphic: 'vue',
//           hair: 'afro',
//           hairColor: 'blonde',
//           hat: 'none3',
//           hatColor: 'green',
//           lashes: true,
//           lipColor: 'purple',
//           mask: true,
//           faceMask: true,
//           mouth: 'openSmile',
//           skinTone: 'brown',
//         },
//       });
//     } else if (size.width >=701 && size.width<=999) {
//       setAvatar ({
//         name: "Diana",
//         data: {
//           accessory: 'tinyGlasses',
//           body: 'breasts',
//           circleColor: 'blue',
//           clothing: 'dress',
//           clothingColor: 'red',
//           eyebrows: 'raised',
//           eyes: 'wink',
//           facialHair: 'none2',
//           graphic: 'react',
//           hair: 'pixie',
//           hairColor: 'orange',
//           hat: 'turban',
//           hatColor: 'red',
//           lashes: true,
//           lipColor: 'green',
//           mask: false,
//           faceMask: false,
//           mouth: 'tongue',
//           skinTone: 'yellow',
//         },
//       });
//     } else {
//       setAvatar({
//         name: "Mikong",
//         data: {
//           accessory: 'none',
//           body: 'breasts',
//           circleColor: 'blue',
//           clothing: 'vneck',
//           clothingColor: 'white',
//           eyebrows: 'angry',
//          eyes: 'heart',
//          facialHair: 'none3',
//          graphic: 'redwood',
//          hair: 'short',
//          hairColor: 'brown',
//          hat: 'none5',
//          hatColor: 'blue',
//          lashes: false,
//          lipColor: 'red',
//          mask: false,
//          faceMask: true,
//          mouth: 'open',
//          skinTone: 'light',
//         },
//       });
//     }
//   }, [windowSize, size]);

//   if (!avatar) {
//     return null;
//   }

//   useEffect(() => {
//     function updateAvatarAppearance() {
//       const { width } = windowSize;
//       const updatedAvatars = { ...avatars };
  
//       if (width > 1000) {
//         // Update Mithi's appearance for big screens
//         updatedAvatars.mithi = {
//           ...avatars.mithi,
//           hat: 'none',
//           hatColor: 'red',
//           accessory: 'none',
//           clothingColor: 'blue',
//           graphic: "gatsby",
//         };
//         updatedAvatars.diana = {
//           ...avatars.diana,
//           hat: "turban",
//           hatColor: 'red',
//           accessory: 'none',
//           clothingColor: "green",
//           graphic: 'redwood',
//         };
//         updatedAvatars.mikong = {
//           ...avatars.mikong,
//           hat: "none",
//           hatColor: 'red',
//           accessory: 'none',
//           clothingColor: "white",
//           graphic: 'redwood',
//         };
//       } else if (width < 700) {
//         // Update Mikong's appearance for small screens
//         updatedAvatars.mikong = {
//           ...avatars.mikong,
//           hat: "beanie",
//           hatColor: 'green',
//           accessory: 'rondGlasses',
//           clothingColor: "white",
//           graphic: 'graphQL',
//         };
//       } else {
//         // Update Diana's appearance for medium screens
//         updatedAvatars.diana = {
//           ...avatars.diana,
//           hat: "turban",
//           hatColor: 'red',
//           accessory: 'none',
//           clothingColor: "green",
//           graphic: 'redwood',
//         };
//       }
    
      
//       setAvatars(updatedAvatars);
//     }
//     updateAvatarAppearance ();
//   }, [windowSize]);

//   return (
//     <>
//     {Object.entries(avatars).map(([name, data]) =>
//     <div key={name}>
//       <h2>{name}</h2>
//       <BigHead
//         data={data}
//         bgShape="circle"
//         size={50}
//       />

//     </div>
//     )}
//     </>
//   );
// }
// export default AvatarProvider;


