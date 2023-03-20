
import './App.css';
import AvatarProvider from './components/AvatarProvider';
// import ScreenChange from './components/ScreenChangeComponent';
import ContextScreenChangeComponent from './components/ContextScreenChangeComponent';
import WindowSizeProvider from './components/WindowSizeProvider';


function App() {
 
  return (
    // <ScreenChange />
    <WindowSizeProvider>
      <ContextScreenChangeComponent />
    </WindowSizeProvider>
    
  );
}

export default App;
