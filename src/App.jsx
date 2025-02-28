import React, { useState } from "react";
import Weather from "./components/Weather";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={`container ${theme}`}>
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <Weather />
      </div>
      <Footer />
    </>
  );
};

export default App;
