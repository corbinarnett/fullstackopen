import React from "react";

const Form = ({ handleSubmit, handleChange, newName, newNumber }) => {
  return (
    <div>
      <h2>Add a new contact:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input name="name" value={newName} onChange={handleChange} required />
        </div>
        <div>
          number:{" "}
          <input
            name="number"
            value={newNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
