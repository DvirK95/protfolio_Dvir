import React, { useState } from "react";
import "./FloatingButton.css";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [theme, setTheme] = useState("default");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleIncreaseTextSize = () => {
    setTextSize((prevSize) => Math.min(prevSize + 10, 200));
  };

  const handleDecreaseTextSize = () => {
    setTextSize((prevSize) => Math.max(prevSize - 10, 50));
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const toggleHighContrast = () => {
    setHighContrast((prev) => !prev);
  };

  // Update the styles based on the selected options
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--text-size", `${textSize}%`);

    if (highContrast) {
      root.style.setProperty("--text-color", "white");
      root.style.setProperty("--background-color", "black");
    } else {
      root.style.setProperty("--text-color", "");
      root.style.setProperty("--background-color", "");
    }

    if (theme === "light") {
      root.style.setProperty("--theme-text-color", "black");
      root.style.setProperty("--theme-background-color", "white");
    } else if (theme === "dark") {
      root.style.setProperty("--theme-text-color", "white");
      root.style.setProperty("--theme-background-color", "black");
    } else {
      root.style.setProperty("--theme-text-color", "");
      root.style.setProperty("--theme-background-color", "");
    }
  }, [textSize, highContrast, theme]);

  return (
    <div className={`floating-button-container ${isOpen ? "open" : ""}`}>
      <button
        onClick={toggleMenu}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="floating-button"
      >
        {/*Accessibility*/}
        <FontAwesomeIcon icon={faWheelchair} flip="horizontal" />
      </button>
      {isOpen && (
        <div className="floating-menu">
          <button onClick={handleIncreaseTextSize}>Increase Text Size</button>
          <button onClick={handleDecreaseTextSize}>Decrease Text Size</button>
          <select value={theme} onChange={handleThemeChange}>
            <option value="default">Default Theme</option>
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
          </select>
          <label>
            <input
              type="checkbox"
              checked={highContrast}
              onChange={toggleHighContrast}
            />
            High Contrast Mode
          </label>
        </div>
      )}
    </div>
  );
};

export default FloatingButton;
