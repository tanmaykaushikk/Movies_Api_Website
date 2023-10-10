import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="flex items-center justify-between gap-8 h-fit bg-black text-yellow py-4 px-4">
      <h1 className="bg-yellow-500 py-1 px-2 ml-20 rounded-lg font-bold text-white text-3xl">
        IM-BD
      </h1>
      <div className="flex gap-8 mx-10">
        <Link
          to="/profile"
          className="font-bold hover:underline text-white text-xl"
        >
          Profile
        </Link>
        <Link to="/" className="font-bold hover:underline text-white text-xl">
          Feed
        </Link>
      </div>
    </header>
  );
}
