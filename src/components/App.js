import React, { useState } from "react";
import itemData from "../data/items";
import Header from "./Header"


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <Header onDarkModeClick={onDarkModeClick} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
  );
}

export default App;
