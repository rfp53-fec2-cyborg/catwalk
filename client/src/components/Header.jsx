import React, { useState, useEffect } from 'react';
import magnifyingGlass from '../assets/magnifying_glass.png';

const Header = () => {
  const currentTheme = window.localStorage.getItem('theme') || document.documentElement.className;
  const [theme, setTheme] = useState(currentTheme);

  const handleChange = (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle(theme);
    setTheme(event.target.value);
  };

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  useEffect(() => {
    document.documentElement.classList.add(theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  const ThemeRadioButton = ({ value }) => {
    return (
      <label>
        <input
          type="radio"
          name={value}
          value={value}
          checked={theme === value}
          onChange={handleChange}
        />
        {capitalize(value)}
      </label>
    );
  };

  return (
    <div className='header'>
      <h3>Catborg</h3>
      <form>
        <ThemeRadioButton value="light" />
        <ThemeRadioButton value="dark" />
      </form>
      <div className='searchForm'>
        <div className='searchField'></div>
        <img src={magnifyingGlass} />
      </div>
    </div>
  );
};

export default Header;