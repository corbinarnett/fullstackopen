import React from "react";

const Search = ({ handleChange, newSearch }) => {
  return (
    <div>
      Search:
      <input name="search" onChange={handleChange} value={newSearch} />
    </div>
  );
};

export default Search;
