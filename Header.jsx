import React from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";

export default function Header({ onSearchTermChange }) {
  return (
    <header className="bg-black mx flex items-center justify-between text-white ">
      <NavBar />
      <SearchBar onSearchTermChange={onSearchTermChange} />
    </header>
  );
}
