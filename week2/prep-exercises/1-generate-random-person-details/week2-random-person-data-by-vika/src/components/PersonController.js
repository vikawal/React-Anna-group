import React, { useState, useEffect } from "react";
import Person from './Person';
import Button from './Button';

function PersonController() {
  const[people, setPeople] = useState(null);

  const getPeople = async() => {
    const response = await fetch ('https://www.randomuser.me/api?results=10');
    const data = await response.json();
    const people = data.results.map(({name, email, phone}) => ({
      firstName: name.first,
      lastName: name.last,
      email,
      phone
    }));

    setPeople(people);
  };

  useEffect(() => {
    getPeople();
  }, []);

  const handleClick = () => {
    setPeople([]);
    getPeople();
  };

  return (
    <>
      <Person people={people} />
      <Button onClick={handleClick} text="Get new 10 people" />
    </>
  );
}

export default PersonController;


// import React, { useState, useEffect } from "react";
// import Person from './Person';
// import Button from './Button';

// function PersonController() {
//   const [person, setPerson] = useState(null);
//   const getPerson = async () => {
//     const response = await fetch('https://www.randomuser.me/api?results=1');
//     const data = await response.json();
//     const { name, email, phone } = data.results[0];
//     setPerson({ firstName: name.first, lastName: name.last, email, phone });
//     };
//   useEffect(() => {
//     // console.log("it is working");
//     getPerson();
//   }, []);

//    const handleClick =() => {
//     setPerson(null);
//     getPerson();
//    };

//   // useEffect(() => {
//   //   console.log(person);
//   // }, [person]);

//   return (
//    <>
//     <Person person={person} />;
//     <Button onClick={handleClick} text="Get new person" />
//    </>
//   );
// }

// export default PersonController;