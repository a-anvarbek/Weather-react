import React, { useState } from "react";

const Search = ({ setCity, fetchWeatherApi }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setCity(input);
      fetchWeatherApi(input);
      setInput("");
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        id="searchInp"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <button id="searchBtn" className="searchBtn" onClick={handleSearch}>
        <i>🔍</i>
      </button>
    </div>
  );
};

export default Search;
