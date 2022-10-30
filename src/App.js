import React, { useEffect, useState } from "react";

import "./App.css";
import { condidateData } from "./utils/candidateData";
import Header from "./components/Header";
import CandidateTable from "./components/CandidateTable";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => setSearchTerm(e.target.value);

  useEffect(() => {
    const results = condidateData.filter((o) =>
      o.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    console.log(results);
    setSearchResults(results);
  }, [searchTerm]);
  console.log(searchResults.length);
  return (
    <div className="app">
      <Header handleChange={handleChange} searchTerm={searchTerm} />

      <CandidateTable searchResults={searchResults} />
    </div>
  );
};

export default App;
