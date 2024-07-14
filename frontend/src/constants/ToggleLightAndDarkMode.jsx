import React, {useState} from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";


const ToggleLightAndDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      {/* TOGGLE MODES  */}
      <div className="flex ">
        <div className="flex bg-gray-300 text-black dark:bg-neutral-600 border-2 border-gray-200 dark:border-neutral-600 dark:text-black rounded-xl">
          <button
            className={`p-3  text-yellow-500 dark:text-yellow-300 rounded-l-xl ${
              darkMode
                ? "px-3 dark:bg-neutral-900"
                : "px-7 bg-gray-300 rounded-r-xl"
            }`}
            onClick={toggleDarkMode}
          >
            <LightModeIcon />{" "}
          </button>
          <button
            className={` text-black dark:text-white ${
              darkMode
                ? "px-7 dark:bg-neutral-600 rounded-l-xl rounded"
                : "px-3 bg-white rounded-r-xl"
            }`}
            onClick={toggleDarkMode}
          >
            <DarkModeIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default ToggleLightAndDarkMode;
