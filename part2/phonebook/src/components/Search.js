import React from "react";

const Search = ({ handleChange, newSearch }) => {
  return (
    <>
      <h2>Phonebook</h2>
      <div>
        Search:
        <input name="search" onChange={handleChange} value={newSearch} />
      </div>
    </>
  );
};

export default Search;
