import React from "react";

const DisplayContacts = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <div>
            {person.name} - {person.number}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default DisplayContacts;
