import React from "react";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <div className="icon" id="icon">
      <button id="iconBtn" className="iconBtn" onClick={toggleTheme}>
        <i>{theme === "light" ? "☀️" : "🌙"}</i>
        {/* <i className={`fa-solid ${theme === "light" ? "fa-sun" : "fa-moon"}`}></i> */}
      </button>
    </div>
  );
};

export default ThemeToggle;

// import React, { useState } from "react";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState("light");

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <div className={`theme-container ${theme}`}>
//       <button id="themeBtn" className="theme-button" onClick={toggleTheme}>
//         <i>{theme === "light" ? "☀️" : "🌙"}</i>
//       </button>
//     </div>
//   );
// };

// export default ThemeToggle;

