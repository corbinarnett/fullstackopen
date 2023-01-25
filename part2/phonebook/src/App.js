import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Chief Dingus" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      // date: new Date().toISOString(),
      // important: Math.random() < 0.5,
      id: persons.length + 1,
    };

    if (persons.find((person) => person.name === personObject.name)) {
      alert(`${personObject.name} is already added to the phonebook`);
      setNewName("");
      return false;
    }
    setPersons([...persons, personObject]);
    // console.log(persons);
    setNewName("");
  };

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <div>{person.name}</div>
        ))}
      </ul>
    </div>
  );
};

export default App;
