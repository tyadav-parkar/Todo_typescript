import { useState } from "react";

function SearchButton() {
  const items = ["Apple", "Orange", "Nanu", "Tanishq", "Yadav"];
  const [search, setSearch] = useState("");
  const [found, setFound] = useState("Not Found");

  function handleSearch(e) {
    e.preventDefault();
    const trimmedSearch = search.trim().toLowerCase();
    const match = items.find((item) => item.toLowerCase() === trimmedSearch);
    setFound(match ? `Found: ${match}` : "Not Found");
  }

  return (
    <>
      <h1>Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter item"
        />
        <button type="submit">Search</button>
      </form>
      <p>{found}</p>
    </>
  );
}
export  default SearchButton;