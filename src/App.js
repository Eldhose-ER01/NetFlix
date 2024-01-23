import React from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Bannner from "./components/Banner/Bannner";
import Rowpost from "./components/RowPost/Rowpost";
import {originals,action } from'./url'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Bannner />
      <Rowpost url={originals} title='Netflix Orginals' />
      <Rowpost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
