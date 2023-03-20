
import useScreenSize from './changeScreenSize';

function ScreenChange() {
  const windowSize = useScreenSize();

  return (
    <div>
      <h1>Window size: {windowSize.width} x {windowSize.height} </h1>
    </div>
  );
}

export default ScreenChange;
