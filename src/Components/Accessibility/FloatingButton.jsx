import './FloatingButton.css';
import { faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFloatingButton from './useFloatingButton';

function FloatingButton() {
  const {
    isOpen,
    toggleHighContrast,
    toggleMenu,
    theme,
    highContrast,
    handleDecreaseTextSize,
    handleIncreaseTextSize,
    handleThemeChange,
  } = useFloatingButton;
  return (
    <div className={`floating-button-container ${isOpen ? 'open' : ''}`}>
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
}

export default FloatingButton;
