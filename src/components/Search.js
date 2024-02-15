import React, {useState} from "react";

function Search( {whileSearching} ) {
  const [text, setText] = useState("");

  function handleChange(value){
    setText(value);
    whileSearching(value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {text}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
