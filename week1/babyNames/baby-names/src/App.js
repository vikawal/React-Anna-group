import React from "react";
import "./App.css";
import {names} from "./baby-names-data.js";
import NamesList from "./NameList";
import NameColor from "./NameColor.js";


function App() {
  return (
    <div className="App">
      <NamesList names={names} />
      
    </div>
  );
}

export default App;
