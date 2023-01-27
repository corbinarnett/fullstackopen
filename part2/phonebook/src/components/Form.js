import React from "react";

const Form = ({ handleSubmit, handleChange, newName, newNumber }) => {
  return (
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
  );
};

export default Form;
