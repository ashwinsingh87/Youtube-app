import React, { useState } from "react";

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState("");

  function handleChange(value) {
    setSearchItem(value);
    console.log(searchItem);
  }
  return (
    <div className="flex items-center">
      <div>
        <input
          type="text"
          onChange={(e) => handleChange(e.target.value)}
          className="w-96 rounded-l-full pl-4 border border-gray-300 p-2 "
          placeholder="Search"
        ></input>
        <button className="p-2 bg-gray-100 border-gray-400 border rounded-r-full">
          Search
        </button>
        <div>
          {searchItem.length > 0 ? (
            <div className="w-8 h-60 bg-slate-500">hello</div>
          ) : null}
        </div>
      </div>
      <img
        alt="search-mic"
        src="https://www.maxpixel.net/static/photo/1x/Vector-Images-Microphone-Icon-Mic-1418319.png"
        className="w-3 cursor-pointer ml-4"
      ></img>
    </div>
  );
};

export default SearchBar;
