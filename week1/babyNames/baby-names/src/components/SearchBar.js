import React from 'react';
import "./searchBar.css";

function SearchBar ({searchQuerry, setSearchQuerry}) {

  return ( 
    <div className='searchBar'>
      < input
        type='text'
        value={searchQuerry}
        onChange={(event) => setSearchQuerry(event.target.value)}
        placeholder="Type first letters to find name"
        />
    </div>
);
}

export default SearchBar;