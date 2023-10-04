import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleKeyUp = (e) => {
    onSearch(e);
  };
  return (
    <input
      onKeyUp={handleKeyUp}
      className="bg-slate-200 border-4 focus:outline-none border-slate-300 rounded-2xl p-1 mx-10 mt-10 h-max w-max "
      type="text"
      placeholder="Gotta search for them all!"
    ></input>
  );
};

export default SearchBar;
