import { useState } from "react";
import Form from "./components/Form";
import Search from "./components/Search";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setSearch] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    if (persons.find((person) => person.name === personObject.name)) {
      alert(`${personObject.name} is already added to the phonebook`);
      setNewName("");
      return false;
    }

    setPersons([...persons, personObject]);
    setNewName("");
    setNewNumber("");
  };

  const handleChange = (event) => {
    let inputName = event.target.name;
    let inputValue = event.target.value;

    switch (inputName) {
      case "name":
        setNewName(inputValue);
        break;
      case "number":
        setNewNumber(inputValue);
        break;
      case "search":
        setSearch(inputValue);
        break;
      default:
    }
  };

  return (
    <div>
      <Search newSearch={newSearch} handleChange={handleChange} />
      <h2>Add a new contact:</h2>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
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

export default App;
