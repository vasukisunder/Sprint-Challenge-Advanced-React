import React from 'react';
import useDarkMode from './hooks/useDarkMode';

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode', false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
  
     <div>
          <h1>Women's World Cup</h1>
          <div className="dark-mode__toggle">
      <div data-testid="toggle"
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
     </div>
   
  )
};

export default Header;