import React from 'react';
import './styles/App.css';
import SkipSelectorPage from './pages/SkipSelectorPage';
import Header from './components/layout/Header';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="theme-toggle-btn"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div style={{ position: 'relative' }}>
          <Header />
          <ThemeToggle />
        </div>
        <main>
          <SkipSelectorPage />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
