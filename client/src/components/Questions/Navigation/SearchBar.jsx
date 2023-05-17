import React, { useState } from 'react';

function SearchBar({ c }) {
  const [searchText, setSearchText] = useState('');

  function onTextChange(e) {
    c.textSearch(e.target.value);
  }

  return (
    <>
      <h3>Questions and Answers</h3>
      <form>
        <input type="text" placeholder="Search for a Question or Answer" onChange={onTextChange} data-testid="SearchForm" />
      </form>
    </>
  );
}

export default SearchBar;
