
import React, { useContext } from 'react';
import { WindowSizeContext } from './WindowSizeProvider';
import AvatarProvider, {AvatarContext} from './AvatarProvider';

function ContextScreenChangeComponent() {
  const windowSize = useContext(WindowSizeContext);
  const avatars = useContext(AvatarContext);

  if (!windowSize) {
    return null;
  }

  const { width, height } = windowSize;
  return (
    <div>
      <h1> Window size: {width} * {height} </h1>
      <AvatarProvider />
    </div>
  );
}

export default ContextScreenChangeComponent;






// function ContextScreenChangeComponentWithWindowSize() {
//   return (
//     <WindowSizeProvider>
//       <ContextScreenChangeComponent />
//     </WindowSizeProvider>
//   );
// }

// export default ContextScreenChangeComponentWithWindowSize;
