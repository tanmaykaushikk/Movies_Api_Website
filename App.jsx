import "./App.css";
import SearchFeed from "./pages/SearchFeed/SearchFeed";
import Profile from "./pages/Profile/Profile";

import { Routes, Route } from "react-router";

const API_URL = "https://www.omdbapi.com?apikey=9f6a20f9";
// const API_URL = 'https://www.omdbapi.com?apikey=9f6a20f9'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchFeed />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
