import React, { useState } from "react";

function App() {
  const [value, setvalue] = useState("");
  const [items, additems] = useState([]);
  function typed(event) {
    const newvalue = event.target.value;
    setvalue(newvalue);
  }
  function additem() {
    additems((prevValue) => {
      return [...prevValue, value];
    });
    setvalue(" ");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={typed} value={value} />
        <button onClick={additem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((add) => (
            <li>{add}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
