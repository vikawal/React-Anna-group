import React, { useState } from 'react';
import "./App.css";
import {names} from "./data/baby-names-data.js";
// import NameColor from "./components/NameColor";
import NamesList from "./components/NameList";
import SearchBar from './components/SearchBar'
import {sortByName, filterByGender} from './components/sorting.js'
import RadioButtons from "./components/radioButtons";


function App() {
  const [gender, setGender] = useState("");
  const [searchQuerry, setSearchQuerry] = useState("");
  const sortedNames = sortByName(names);

  const filteredNames = gender ? filterByGender (sortedNames, gender): sortedNames;
  
  const searchedNames = searchQuerry ? names.filter((name) =>
  name.name.toLowerCase().includes(searchQuerry.toLowerCase())
  )
  :filteredNames;


  return (
    <div className="App">
      <div className="buttons">
      { <RadioButtons gender={gender} setGender={setGender} />
      /* <button onClick={() => setGender("")}>All</button>
        <button onClick={() => setGender("f")}>Girls</button>
        <button onClick={() => setGender("m")}>Boys</button> */}
      </div>
      <div>
        <SearchBar 
        searchQuerry={searchQuerry} setSearchQuerry={setSearchQuerry}
        />
      </div>
      <div>
        <NamesList names={searchedNames}
        />
      </div>
      {/* <div className="names">
       {<NamesList names={filteredNames} />}
      </div> */}
    {/* <NamesList names={names} /> */}
      
    </div>
  );
}

export default App;
