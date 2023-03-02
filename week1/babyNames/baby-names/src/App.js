import React, { useState } from 'react';
import "./App.css";
import {names} from "./baby-names-data.js";
import NameColor from "./NameColor";
import NamesList from "./NameList";
import {sortByName, filterByGender} from './sorting.js'


function App() {
  const [gender, setGender] = useState("");
  const sortedNames = sortByName(names);
  const filteredNames = gender ? filterByGender (sortedNames, gender): sortedNames;
  return (
    <div className="App">
      <div className="buttons">
      <button onClick={() => setGender("")}>All</button>
        <button onClick={() => setGender("f")}>Girls</button>
        <button onClick={() => setGender("m")}>Boys</button>
      </div>
      <div className="names">
       {filteredNames.map((item)=> (
        <NameColor 
        key= {item.id}
        name={item.name}
        sex={item.sex} />
       )
       )}
      </div>
    {/* <NamesList names={names} /> */}
      
    </div>
  );
}

export default App;
