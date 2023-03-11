import React from "react";

function Person({people}) {
  return (
    <div className="10personList">
      {people && people.length ?  (
        people.map((person, index) => (
          <ul key={index}>
            <li>First Name: {person.firstName}</li>
            <li>Last Name: {person.lastName}</li>
            <li>Email: {person.email}</li>
            <li>Phone: {person.phone}</li>
          </ul>
        ))
      ) : (
        <p>Loading...</p>
      )}

    </div>
  );
}

// function Person({person}) {
//   return (
//     <div className="personInfo">
//       {person ? (
//         <ul>
//           <li>First Name: {person.firstName}</li>
//           <li>Last Name: {person.lastName}</li>
//           <li>Email: {person.email}</li>
//           <li>Phone: {person.phone}</li>
//         </ul>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

export default Person;