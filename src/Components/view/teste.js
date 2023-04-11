

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function Header() {
  const theme = useContext(ThemeContext);
  return (
    <header style={{ backgroundColor: theme === 'dark' ? '#333' : '#eee' }}>
      ...
    </header>
  );
}
