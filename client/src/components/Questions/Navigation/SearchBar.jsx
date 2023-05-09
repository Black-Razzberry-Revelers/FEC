import React, { useState } from 'react';

function SearchBar({ changeDisplay }) {
  const [searchText, setSearchText] = useState('');

  function onTextChange() {}

  return (
    <>
      <h3>Questions and Answers</h3>
      <form>
        <input type="text" placeholder="Search for a Question or Answer" />
      </form>
    </>
  );
}

export default SearchBar;
