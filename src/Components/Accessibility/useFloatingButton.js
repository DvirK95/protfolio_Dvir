import { useState, useEffect } from 'react';
import './FloatingButton.css';

function useFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [textSize, setTextSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);
  const [theme, setTheme] = useState('default');

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
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--text-size', `${textSize}%`);

    if (highContrast) {
      root.style.setProperty('--text-color', 'white');
      root.style.setProperty('--background-color', 'black');
    } else {
      root.style.setProperty('--text-color', '');
      root.style.setProperty('--background-color', '');
    }

    if (theme === 'light') {
      root.style.setProperty('--theme-text-color', 'black');
      root.style.setProperty('--theme-background-color', 'white');
    } else if (theme === 'dark') {
      root.style.setProperty('--theme-text-color', 'white');
      root.style.setProperty('--theme-background-color', 'black');
    } else {
      root.style.setProperty('--theme-text-color', '');
      root.style.setProperty('--theme-background-color', '');
    }
  }, [textSize, highContrast, theme]);

  return {
    isOpen,
    toggleHighContrast,
    toggleMenu,
    theme,
    highContrast,
    handleDecreaseTextSize,
    handleIncreaseTextSize,
    handleThemeChange,
  };
}

export default useFloatingButton;
