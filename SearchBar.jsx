import React, { useEffect, useState } from "react";

export default function SearchBar({ onSearchTermChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="h-min w-[60%] flex mx-10 justify-end">
      <input
        type="text"
        placeholder="Search IM-BD"
        className="
            bg-white 
            text-sm 
            transition-all ease-in-out duration-200
            p-4
            w-[70%]
            text-black
            text-sm
            outline-none py-2 focus:px-10 rounded-full"
        onChange={(e) => onSearchTermChange(e.target.value)}
      />

      {/* <button className="search-btn">Search</button> */}
    </div>
  );
}
