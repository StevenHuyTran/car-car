import { useEffect, useState } from "react";
import { data } from "./data.js";

function App() {
  const [query, setQuery] = useState("");

  console.log(data.filter((person) => person.first_name.toLowerCase().includes("Ro")));

  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {data.filter((person) =>
        person.first_name.toLowerCase().includes(query)
        ).map((person) => (
          <li key={person.id} className="listItem">
            {person.first_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;


//working filter
