'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDayMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDayMode, setIsDayMode] = useState(false); // Default to night mode
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    if (saved === 'day') {
      setIsDayMode(true);
      document.documentElement.setAttribute('data-theme', 'day');
    } else {
      document.documentElement.setAttribute('data-theme', 'night');
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', isDayMode ? 'day' : 'night');
      document.documentElement.setAttribute('data-theme', isDayMode ? 'day' : 'night');
    }
  }, [isDayMode, mounted]);

  const toggleTheme = () => setIsDayMode(!isDayMode);

  return (
    <ThemeContext.Provider value={{ isDayMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
