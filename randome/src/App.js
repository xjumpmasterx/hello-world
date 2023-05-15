import React, { useState } from "react";
import strings from "./strings.json";

function App() {
  const [randomString, setRandomString] = useState("");

  const handleClick = () => {
    const { strings: sourceStrings } = strings;
    const randomIndex = Math.floor(Math.random() * sourceStrings.length);
    const randomString = sourceStrings[randomIndex];
    setRandomString(randomString);
  };
  

  return (
    <div className="App">
      <h1>Random String App</h1>
      <button onClick={handleClick}>Generate Random String</button>
      <p>{randomString}</p>
    </div>
  );
}

export default App;
