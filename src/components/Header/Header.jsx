import React from 'react';
import styles from '../../App.css';
import Hamburger from '../Hamburger/Hamburger';
import Button from '../Button/Button';
import { useTheme } from '../../context/ThemeContext';

function Header() {
  const { theme, setTheme } = useTheme();

  const toggleMode = () => {
    setTheme((prevState) => !prevState);
  };

  return (
    <>
      <header className={theme ? styles.darkHeader : styles.lightHeader}>
        <Hamburger />
        <Button
          buttonText={theme ? 'Light Mode' : 'Dark Mode'}
          handleClick={toggleMode}
        />
      </header>
    </>
  );
}

export default Header;
