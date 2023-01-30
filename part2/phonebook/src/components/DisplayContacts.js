import React from "react";

const DisplayContacts = ({ persons, newSearch }) => {
  let lowerCaseSearch = newSearch.toLowerCase();

  let filteredArr = persons.filter((person) =>
    person.name.toLowerCase().includes(lowerCaseSearch)
  );

  const contacts = persons.map((person) => (
    <tr key={person.id}>
      <td>
        {person.name} - {person.number}
      </td>
    </tr>
  ));

  const filteredContacts = filteredArr.map((person) => (
    <tr key={person.id}>
      <td>
        {person.name} - {person.number}
      </td>
    </tr>
  ));

  const contactsToDisplay = newSearch ? filteredContacts : contacts;
  return (
    <div>
      <h2>Numbers</h2>
      <table>
        <tbody>{contactsToDisplay}</tbody>
      </table>
    </div>
  );
};

export default DisplayContacts;
