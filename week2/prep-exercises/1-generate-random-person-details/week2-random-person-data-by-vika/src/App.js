import React, { useState, useEffect } from "react";

function App() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch('https://www.randomuser.me/api?results=1');
      const data = await response.json();
      const { name, email } = data.results[0];
      setPerson({ firstName: name.first, lastName: name.last, email });
    };
    getPerson();
  }, []);

  // useEffect(() => {
  //   console.log(person);
  // }, [person]);
  // console.log(person);


  return (
    <div className="App">
      {person ? (
        <ul>
          <li>First Name: {person.firstName}</li>
          <li>Last Name: {person.lastName}</li>
          <li>Email: {person.email}</li>
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;

